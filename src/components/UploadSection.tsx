import React, { useCallback, useState } from 'react'
import { Upload, FileImage, FileVideo, Zap, AlertTriangle } from 'lucide-react'

interface UploadSectionProps {
  onFileAnalysis: (file: File) => void
  isAnalyzing: boolean
}

const UploadSection: React.FC<UploadSectionProps> = ({ onFileAnalysis, isAnalyzing }) => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setSelectedFile(file)
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
    }
  }

  const handleAnalyze = () => {
    if (selectedFile) {
      onFileAnalysis(selectedFile)
    }
  }

  return (
    <section className="py-20 px-6" id="upload">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              UPLOAD & VERIFY
            </span>
          </h2>
          <p className="text-xl text-cyan-300 font-orbitron tracking-wide">
            Drop your media files and let our AI analyze their authenticity
          </p>
        </div>

        <div className="relative">
          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-pink-500 bg-pink-500/10' 
                : 'border-cyan-400/50 bg-black/20 backdrop-blur-sm'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-20 animate-pulse"></div>
            
            <div className="relative z-10">
              {isAnalyzing ? (
                <div className="space-y-6">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-pink-500 rounded-full border-t-transparent animate-spin"></div>
                    <Zap className="absolute inset-0 m-auto w-8 h-8 text-cyan-400 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-pink-400 font-orbitron">ANALYZING...</h3>
                    <p className="text-cyan-300 font-orbitron">Neural networks processing your media</p>
                    <div className="w-64 h-2 bg-black/50 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ) : selectedFile ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    {selectedFile.type.includes('image') ? (
                      <FileImage className="w-12 h-12 text-cyan-400" />
                    ) : (
                      <FileVideo className="w-12 h-12 text-pink-500" />
                    )}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-cyan-300 font-orbitron">{selectedFile.name}</h3>
                      <p className="text-pink-400 font-orbitron text-sm">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAnalyze}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative px-8 py-4 bg-black rounded-lg flex items-center space-x-3 border border-cyan-400/50">
                      <Zap className="w-6 h-6 text-cyan-400" />
                      <span className="text-cyan-300 font-orbitron text-lg tracking-wider font-bold">
                        START ANALYSIS
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <Upload className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2 font-orbitron">
                      DROP FILES HERE
                    </h3>
                    <p className="text-pink-400 mb-6 font-orbitron">
                      or click to browse your device
                    </p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="relative group cursor-pointer"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative px-6 py-3 bg-black rounded-lg border border-purple-400/50">
                        <span className="text-purple-300 font-orbitron tracking-wider">
                          CHOOSE FILE
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Supported formats */}
          <div className="mt-8 text-center">
            <p className="text-cyan-300/70 font-orbitron text-sm mb-4">SUPPORTED FORMATS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['JPG', 'PNG', 'GIF', 'MP4', 'AVI', 'MOV', 'WEBM'].map((format) => (
                <span
                  key={format}
                  className="px-3 py-1 bg-black/30 border border-cyan-400/30 rounded text-cyan-300 font-orbitron text-xs tracking-wider"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <p className="text-yellow-300 font-orbitron text-sm">
                Your files are processed locally and never stored on our servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadSection
