import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
import math
import os

# Initialize Face Landmarker globally to be reused across requests
try:
    model_path = os.path.join(os.path.dirname(__file__), "../data/face_landmarker.task")
    base_options = python.BaseOptions(model_asset_path=model_path)
    options = vision.FaceLandmarkerOptions(
        base_options=base_options,
        output_face_blendshapes=False,
        output_facial_transformation_matrixes=False,
        num_faces=2
    )
    detector = vision.FaceLandmarker.create_from_options(options)
except Exception as e:
    print(f"Failed to initialize MediaPipe Face Landmarker: {e}")
    detector = None

def analyze_image(filepath: str) -> dict:
    if detector is None:
        return {
            "success": False, 
            "error_code": "INTERNAL_ERROR", 
            "message": "Computer vision model failed to load."
        }

    try:
        image = mp.Image.create_from_file(filepath)
    except Exception as e:
        return {"success": False, "error_code": "INVALID_IMAGE", "message": "Could not read the image"}
    
    results = detector.detect(image)
    
    if not results.face_landmarks:
        return {
            "success": False, 
            "error_code": "NO_FACE_DETECTED", 
            "message": "We couldn't clearly detect a face. Try a brighter, front-facing photo."
        }
    if len(results.face_landmarks) > 1:
        return {
            "success": False, 
            "error_code": "MULTIPLE_FACES", 
            "message": "Please upload a photo with only one person in frame."
        }
        
    landmarks = results.face_landmarks[0]
    
    def dist(idx1, idx2):
        l1 = landmarks[idx1]
        l2 = landmarks[idx2]
        return math.sqrt((l1.x - l2.x)**2 + (l1.y - l2.y)**2)
        
    # Standard MediaPipe indices:
    # 10: top of forehead
    # 152: bottom of chin
    # 234: left cheekbone (outer edge)
    # 454: right cheekbone (outer edge)
    # 132 / 361: left / right jaw angle approximate
    
    face_length = dist(10, 152)
    face_width = dist(234, 454)
    jaw_width = dist(132, 361)
    
    # Calculate ratios
    length_width_ratio = face_length / face_width if face_width > 0 else 0
    jaw_cheek_ratio = jaw_width / face_width if face_width > 0 else 0
    
    # Base defaults
    shape = "oval"
    explanation = "Balanced proportions with a softly rounded contour."
    confidence = 0.85
    
    # Simple thresholds (based on academic face shape classification approximations)
    if length_width_ratio > 1.35:
        shape = "long"
        explanation = "Your face length is noticeably greater than its width."
    elif length_width_ratio < 1.15:
        if jaw_cheek_ratio > 0.82:
            shape = "square"
            explanation = "Broad forehead and strong, angular jawline."
        else:
            shape = "round"
            explanation = "Your face width and length are similar with softer, curved features."
    else:
        # Ratio between 1.15 and 1.35
        if jaw_cheek_ratio < 0.75:
            shape = "heart"
            explanation = "Wider forehead and cheekbones tapering down to a narrower chin."
        elif jaw_cheek_ratio > 0.88:
            shape = "square"
            explanation = "Your face features a strong angular jawline that matches your cheek width."
        else:
            shape = "oval"
            explanation = "Balanced proportions. Your face length is subtly greater than your width."

    # Return measurements to help debugging and frontend display if needed
    return {
        "success": True,
        "predicted_shape": shape,
        "confidence": confidence,
        "shape_explanation": explanation,
        "measurements": {
            "face_length_width_ratio": round(length_width_ratio, 2),
            "jaw_cheek_ratio": round(jaw_cheek_ratio, 2)
        }
    }
