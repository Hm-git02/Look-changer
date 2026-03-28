from fastapi import APIRouter, File, UploadFile, Form, HTTPException
from typing import Optional
from app.services.face_analyzer import analyze_image
from app.services.recommendation import get_recommendations
import shutil
import uuid
import os

router = APIRouter()

ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"]

@router.post("/api/analyze-face")
async def analyze_face(
    image: UploadFile = File(...),
    gender: str = Form(...)
):
    if gender not in ["male", "female"]:
        raise HTTPException(status_code=400, detail="Invalid gender provided.")

    if image.content_type not in ALLOWED_MIME_TYPES:
        return {
            "success": False,
            "error_code": "INVALID_FILE_TYPE",
            "message": "Please upload a JPG, PNG, or WEBP.",
            "retryable": True
        }
    
    # Save file temporarily for preview and processing
    file_id = str(uuid.uuid4())
    ext = image.filename.split('.')[-1] if '.' in image.filename else 'jpg'
    temp_filename = f"{file_id}.{ext}"
    temp_filepath = os.path.join("temp", temp_filename)
    
    with open(temp_filepath, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    try:
        # 1. Analyze face shape
        analysis_result = analyze_image(temp_filepath)
        
        if not analysis_result["success"]:
            # If no face or multiple faces
            return {
                "success": False,
                "error_code": analysis_result.get("error_code", "ANALYSIS_FAILED"),
                "message": analysis_result.get("message", "Could not analyze face."),
                "retryable": True
            }

        shape = analysis_result["predicted_shape"]

        # 2. Get recommendations
        recommendations = get_recommendations(gender, shape)

        return {
            "success": True,
            "gender": gender,
            "predicted_shape": shape,
            "confidence": analysis_result["confidence"],
            "shape_explanation": analysis_result["shape_explanation"],
            "image_preview_url": f"http://localhost:8000/temp/{temp_filename}",
            "recommendations": recommendations,
            "measurements": analysis_result["measurements"]
        }

    except Exception as e:
        print(f"Error during analysis: {e}")
        return {
            "success": False,
            "error_code": "INTERNAL_ERROR",
            "message": "An error occurred while processing the image.",
            "retryable": True
        }
