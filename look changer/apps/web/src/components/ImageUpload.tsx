import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, X, ArrowRight, AlertCircle, Camera } from "lucide-react";

type Gender = "male" | "female";

export default function ImageUpload({ 
  onUpload, 
  onBack,
  error,
  gender
}: { 
  onUpload: (file: File) => void;
  onBack: () => void;
  error: string | null;
  gender: Gender | null;
}) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  
  // Camera State
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => stopCamera();
  }, []);

  // Bind the stream to the video element once it is mounted in the DOM
  useEffect(() => {
    if (isCameraActive && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [isCameraActive]);

  const openCamera = async () => {
    setLocalError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // Front camera on mobile, default on laptop
        audio: false
      });
      streamRef.current = stream;
      setIsCameraActive(true);
    } catch (err: any) {
      setLocalError("Camera access denied or unavailable.");
      console.error(err);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const capturedFile = new File([blob], "captured_face.jpg", { type: "image/jpeg" });
            stopCamera();
            validateAndSetFile(capturedFile);
          }
        }, "image/jpeg", 0.9);
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    setLocalError(null);
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    
    if (!validTypes.includes(selectedFile.type)) {
      setLocalError("Please upload a JPG, PNG, or WEBP.");
      return;
    }
    
    if (selectedFile.size > 5 * 1024 * 1024) {
      setLocalError("Please upload an image under 5 MB.");
      return;
    }

    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file) {
      onUpload(file);
    }
  };

  const activeError = localError || error;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto w-full px-4"
    >
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className="text-sm font-medium tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors"
        >
          &larr; Back
        </button>
        <span className="text-sm font-medium tracking-widest uppercase text-accent">
          {gender === "male" ? "MENS" : "WOMENS"} MODE
        </span>
      </div>

      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
          {isCameraActive ? "Take a Photo" : "Upload your photo"}
        </h2>
        <p className="text-foreground/60 max-w-lg mx-auto leading-relaxed">
          For best results, use a front-facing photo with good lighting, minimal tilt, and hair pulled back from the face.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={preview ? "preview" : isCameraActive ? "camera" : "upload"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {!preview && !isCameraActive && (
            <div className="space-y-6">
              <div
                className={`relative border border-dashed rounded-3xl p-12 text-center transition-all bg-surface overflow-hidden
                  ${dragActive ? "border-accent bg-accent/5 ring-4 ring-accent/20" : "border-border/50 hover:border-accent/50"}
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  ref={inputRef}
                  type="file" 
                  accept="image/jpeg, image/png, image/webp"
                  className="hidden"
                  onChange={handleChange}
                />
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <button 
                      onClick={() => inputRef.current?.click()}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors focus:outline-none"
                    >
                      Click to browse files
                    </button>
                    <span className="text-foreground/60 ml-2">or drag and drop</span>
                  </div>
                  <p className="text-sm text-foreground/40 uppercase tracking-widest">
                    JPG, PNG, WEBP up to 5MB
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center w-full space-x-4">
                <div className="h-px bg-border flex-1" />
                <span className="text-sm text-foreground/40 uppercase tracking-widest">or</span>
                <div className="h-px bg-border flex-1" />
              </div>

              <button
                onClick={openCamera}
                className="w-full relative flex items-center justify-center space-x-3 bg-surface border border-border/50 text-foreground px-8 py-5 rounded-3xl text-lg font-medium tracking-wide transition-all hover:bg-black/5 hover:border-accent/40 group focus:outline-none"
              >
                <Camera className="w-5 h-5 text-foreground/50 group-hover:text-accent transition-colors" />
                <span>Use Camera</span>
              </button>
            </div>
          )}

          {isCameraActive && !preview && (
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full max-w-sm aspect-[3/4] md:aspect-square bg-black rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5 border border-border">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-full object-cover -scale-x-100" // Mirrors the front camera intuitively
                />
                
                {/* Visual crop overlay simulating face area */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                   <div className="w-[60%] h-[70%] border-2 border-dashed border-white/40 rounded-[100px]" />
                </div>

                <button 
                  onClick={stopCamera}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background hover:scale-105 transition-all focus:outline-none"
                  aria-label="Close Camera"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={capturePhoto}
                className="group relative flex items-center justify-center bg-foreground text-background px-10 py-4 rounded-full text-lg font-medium tracking-wide transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
              >
                Capture Photo
              </button>

              {/* Hidden canvas used to extract image data */}
              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}

          {preview && (
            <div className="space-y-8 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5 border border-border">
                <img 
                  src={preview} 
                  alt="Upload preview" 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                    setLocalError(null);
                  }}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground p-2 rounded-full hover:bg-background hover:scale-105 transition-all focus:outline-none"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col items-center space-y-3 w-full">
                <button 
                  onClick={handleSubmit}
                  className="w-full max-w-sm group relative flex items-center justify-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium tracking-wide transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Analyze Face Shape</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-xs text-foreground/50">
                  Your image is used only for this analysis.
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activeError && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 rounded-2xl bg-red-50 text-red-600 flex items-start space-x-3 border border-red-100 max-w-sm mx-auto"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="text-sm font-medium">{activeError}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
