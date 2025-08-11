"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { toast } from "react-toastify";
import { Zap, Check, CheckCircle, Download } from "lucide-react";
import UploadSection from "@/components/converter/UploadSection";
import FormatSelector from "@/components/converter/FormatSelector";
import CompressionSlider from "@/components/converter/CompressionSlider";
import ImagePreview from "@/components/converter/ImagePreview";

/* eslint-disable @next/next/no-img-element */

interface PreviewFile {
  file: File;
  preview: string;
}

interface ConvertedFile {
  name: string;
  blob: Blob;
  url: string;
  originalSize: number;
  compressedSize: number;
}

const formatMime: Record<string, string> = {
  webp: "image/webp",
  jpeg: "image/jpeg",
  png: "image/png",
  avif: "image/avif",
};

export default function ImageConverter() {
  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [outputFormat, setOutputFormat] = useState("webp");
  const [compression, setCompression] = useState(80);
  const [converted, setConverted] = useState<ConvertedFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    const totalFiles = acceptedFiles.length;
    let processedFiles = 0;

    const processFiles = () => {
      const batch = acceptedFiles.slice(processedFiles, processedFiles + 1);

      batch.forEach((file) => {
        const mapped = {
          file,
          preview: URL.createObjectURL(file),
        };
        setFiles((curr) => [...curr, mapped]);
        processedFiles++;

        const progress = Math.round((processedFiles / totalFiles) * 100);
        setUploadProgress(progress);

        if (processedFiles < totalFiles) {
          setTimeout(processFiles, 100);
        } else {
          setTimeout(() => {
            setUploading(false);
            setUploadProgress(0);
            setConverted([]);
            setProgress([]);
            toast.success(
              `${totalFiles} image${
                totalFiles > 1 ? "s" : ""
              } uploaded successfully!`
            );
          }, 200);
        }
      });
    };

    processFiles();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

  React.useEffect(() => {
    return () => files.forEach((f) => URL.revokeObjectURL(f.preview));
  }, [files]);

  const handleFormatChange = (format: string) => {
    setOutputFormat(format);
    setConverted([]);
    setProgress([]);
    setIsDropdownOpen(false);
  };

  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompression(Number(e.target.value));
    setConverted([]);
    setProgress([]);
  };

  const convertAll = async () => {
    setProcessing(true);
    setProgress(Array(files.length).fill(0));
    const results: ConvertedFile[] = [];
    let errorOccurred = false;

    for (let i = 0; i < files.length; i++) {
      const { file } = files[i];
      let convertedBlob: Blob | null = null;
      const outName = file.name.replace(/\.[^.]+$/, "." + outputFormat);
      const originalSize = file.size;
      let compressedSize = 0;

      try {
        if (outputFormat === "svg") {
          convertedBlob = file;
        } else {
          const options = {
            maxSizeMB: 5,
            maxWidthOrHeight: 4096,
            initialQuality: compression / 100,
            fileType: formatMime[outputFormat],
            useWebWorker: true,
            onProgress: (p: number) => {
              setProgress((curr) => {
                const next = [...curr];
                next[i] = p;
                return next;
              });
            },
          };
          convertedBlob = await imageCompression(file, options);
        }

        if (!convertedBlob) throw new Error("Conversion failed");
        compressedSize = convertedBlob.size;
        results.push({
          name: outName,
          blob: convertedBlob,
          url: URL.createObjectURL(convertedBlob),
          originalSize,
          compressedSize,
        });
      } catch {
        errorOccurred = true;
        results.push({
          name: outName,
          blob: file,
          url: URL.createObjectURL(file),
          originalSize,
          compressedSize: originalSize,
        });
      }
    }

    setConverted(results);
    setProgress(Array(files.length).fill(100));
    setProcessing(false);

    if (errorOccurred) {
      toast.error("Some images failed to convert.");
    } else {
      toast.success("All images converted successfully!");
    }
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    converted.forEach((f) => {
      zip.file(f.name, f.blob);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-images.zip";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast.success("ZIP downloaded!");
  };

  return (
    <div className="space-y-8">
      <UploadSection
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        uploading={uploading}
        uploadProgress={uploadProgress}
      />

      <ImagePreview
        files={files}
        setFiles={setFiles}
        progress={progress}
        setProgress={setProgress}
        processing={processing}
      />

      <FormatSelector
        outputFormat={outputFormat}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        onFormatChange={handleFormatChange}
        processing={processing}
      />

      <CompressionSlider
        compression={compression}
        onCompressionChange={handleCompressionChange}
        processing={processing}
      />

      <section className="flex justify-center">
        <button
          className={`group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden`}
          onClick={convertAll}
          disabled={files.length === 0 || processing}
          aria-label="Convert all images"
        >
          <span className="relative z-10 flex items-center gap-2">
            {processing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Converting...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Convert All Images
              </>
            )}
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          ></div>
        </button>
      </section>

      {converted.length > 0 && (
        <section className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-slate-200 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Converted Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {converted.map((f, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={f.url}
                    alt={f.name}
                    className="w-full h-20 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    title="Click to download"
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = f.url;
                      a.download = f.name;
                      a.click();
                      toast.success("Image downloaded!");
                    }}
                    tabIndex={0}
                    aria-label={`Download image ${f.name}`}
                  />

                  <div className="mt-2 text-center">
                    <span
                      className="text-xs text-slate-300 truncate block"
                      title={f.name}
                    >
                      {f.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {((f.compressedSize || 0) / 1024).toFixed(1)} KB
                      {f.compressedSize && f.originalSize ? (
                        <>
                          {" "}
                          <span className="text-green-400 font-bold">
                            (
                            {Math.round(
                              100 - (f.compressedSize / f.originalSize) * 100
                            )}
                            % smaller)
                          </span>
                        </>
                      ) : null}
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
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
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
        </section>
      )}

      <section className="flex justify-center">
        <button
          className={`group relative bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden`}
          onClick={downloadZip}
          disabled={converted.length === 0}
          aria-label="Download all as ZIP"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download ZIP
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          ></div>
        </button>
      </section>
    </div>
  );
}
