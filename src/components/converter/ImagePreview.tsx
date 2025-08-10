"use client";
import { Check, X, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

/* eslint-disable @next/next/no-img-element */

interface PreviewFile {
  file: File;
  preview: string;
}

interface ImagePreviewProps {
  files: PreviewFile[];
  setFiles: (files: PreviewFile[]) => void;
  progress: number[];
  setProgress: (progress: number[]) => void;
  processing: boolean;
}

export default function ImagePreview({
  files,
  setFiles,
  progress,
  setProgress,
  processing,
}: ImagePreviewProps) {
  const clearAll = () => {
    setFiles([]);
    setProgress([]);
    toast.info("Cleared all images");
  };

  if (files.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-200">
          Uploaded Images ({files.length})
        </h3>
        <button
          onClick={clearAll}
          className="text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center gap-2"
          aria-label="Clear all images"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {files.map((f, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
          >
            <button
              className="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/30 rounded-full p-1 text-red-400 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label={`Remove image ${f.file.name}`}
              onClick={() => {
                setFiles(files.filter((_, i) => i !== idx));
                setProgress(progress.filter((_, i) => i !== idx));
                toast.info("Image removed");
              }}
              tabIndex={0}
            >
              <X className="w-4 h-4" />
            </button>

            <img
              src={f.preview}
              alt={f.file.name}
              className="w-full h-20 object-cover rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              tabIndex={0}
            />

            <div className="mt-2 text-center">
              <span
                className="text-xs text-slate-300 truncate block"
                title={f.file.name}
              >
                {f.file.name}
              </span>
              <span className="text-[10px] text-slate-400">
                {(f.file.size / 1024).toFixed(1)} KB
              </span>
            </div>

            {progress[idx] === 100 ? (
              <div className="w-full flex justify-center items-center mt-2">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
              </div>
            ) : processing || progress[idx] > 0 ? (
              <div className="w-full h-3 bg-slate-700 rounded-full mt-2 relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress[idx] || 0}%` }}
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-slate-300 font-bold px-1">
                  {progress[idx] ? `${Math.round(progress[idx])}%` : "0%"}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
