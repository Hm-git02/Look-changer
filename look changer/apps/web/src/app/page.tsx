"use client";

import { useState } from "react";
import LandingHero from "@/components/LandingHero";
import GenderSelection from "@/components/GenderSelection";
import ImageUpload from "@/components/ImageUpload";
import ProcessingAnimation from "@/components/ProcessingAnimation";
import ResultsDashboard from "@/components/ResultsDashboard";

export type Step = "landing" | "gender" | "upload" | "processing" | "results";
export type Gender = "male" | "female";
export type AnalysisResult = {
  success: boolean;
  predicted_shape: string;
  shape_explanation: string;
  image_preview_url: string;
  recommendations: Array<{
    id: string;
    style: string;
    image: string;
    why_it_works: string;
    length: string;
    maintenance: string;
    texture: string[];
  }>;
};

export default function Home() {
  const [step, setStep] = useState<Step>("landing");
  const [gender, setGender] = useState<Gender | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleStart = () => setStep("gender");
  
  const handleGenderSelect = (selected: Gender) => {
    setGender(selected);
    setStep("upload");
  };

  const handleBackToGender = () => setStep("gender");

  const handleUpload = async (file: File) => {
    setImage(file);
    setStep("processing");
    setErrorMsg(null);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("gender", gender as string);

    try {
      // In development we might just use localhost:8000
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiUrl}/api/analyze-face`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.message || "Failed to analyze face.");
      }

      // Override the preview URL with a local blob to avoid mixed-content or localhost port errors on remote devices
      data.image_preview_url = URL.createObjectURL(file);

      setResult(data);
      setStep("results");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong.");
      setStep("upload"); // Revert to upload on error
    }
  };

  const handleReset = () => {
    setGender(null);
    setImage(null);
    setResult(null);
    setErrorMsg(null);
    setStep("landing");
  };

  const handleTryAnother = () => {
    setImage(null);
    setResult(null);
    setErrorMsg(null);
    setStep("upload"); // Keep gender, just upload new photo
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 selection:bg-accent selection:text-white">
      {step === "landing" && <LandingHero onStart={handleStart} />}
      
      {step === "gender" && (
        <GenderSelection onSelect={handleGenderSelect} />
      )}
      
      {step === "upload" && (
        <ImageUpload
          onUpload={handleUpload}
          onBack={handleBackToGender}
          error={errorMsg}
          gender={gender}
        />
      )}
      
      {step === "processing" && <ProcessingAnimation />}
      
      {step === "results" && result && (
        <ResultsDashboard 
          result={result} 
          onTryAnother={handleTryAnother} 
          onReset={handleReset} 
        />
      )}
    </main>
  );
}
