"use client";
import { CloudUpload } from "lucide-react";
import { colors } from "@/config/colors";

interface UploadSectionProps {
  getRootProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
  uploading: boolean;
  uploadProgress: number;
}

export default function UploadSection({
  getRootProps,
  getInputProps,
  isDragActive,
  uploading,
  uploadProgress,
}: UploadSectionProps) {
  return (
    <section className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      <div
        {...getRootProps()}
        className={`relative cursor-pointer transition-all duration-300 ${
          isDragActive ? "scale-105" : "hover:scale-[1.02]"
        }`}
      >
        <input {...getInputProps()} />

        <div className="text-center">
          <div className="mx-auto w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
            {uploading ? (
              <div className="w-10 h-10 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
            ) : (
              <CloudUpload className="w-10 h-10 text-blue-400" />
            )}
          </div>

          <h3 className="text-xl font-semibold text-slate-200 mb-2">
            {uploading
              ? "Uploading..."
              : isDragActive
              ? "Drop images here"
              : "Upload Images"}
          </h3>
          <p className="text-slate-400 mb-4">
            {uploading
              ? "Processing your images..."
              : "Drag & drop images here, or click to browse"}
          </p>

          {uploading && (
            <div className="mb-4">
              <div className="w-full h-3 bg-slate-700 rounded-full relative overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${colors.gradients.secondary} rounded-full transition-all duration-300`}
                  style={{ width: `${uploadProgress}%` }}
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-slate-300 font-bold px-1">
                  {uploadProgress}%
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Uploading {uploadProgress}% complete
              </p>
            </div>
          )}

          <button
            className={`px-6 py-3 bg-gradient-to-r ${
              colors.gradients.secondary
            } text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium ${
              uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Choose Files"}
          </button>
        </div>
      </div>
    </section>
  );
}
