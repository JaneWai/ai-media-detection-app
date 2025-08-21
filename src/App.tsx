import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import UploadSection from './components/UploadSection'
import ResultsSection from './components/ResultsSection'
import Features from './components/Features'
import Footer from './components/Footer'
import { AnalysisResult } from './types'

function App() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileAnalysis = async (file: File) => {
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock analysis result
    const mockResult: AnalysisResult = {
      confidence: Math.random() * 100,
      isAIGenerated: Math.random() > 0.5,
      detectionMethods: [
        'Neural Network Analysis',
        'Pixel Inconsistency Detection',
        'Metadata Verification',
        'Temporal Coherence Analysis'
      ],
      technicalDetails: {
        resolution: '1920x1080',
        format: file.type,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        duration: file.type.includes('video') ? '00:02:34' : undefined
      },
      riskFactors: [
        'Unusual compression artifacts detected',
        'Inconsistent lighting patterns',
        'Facial landmark irregularities'
      ]
    }
    
    setAnalysisResult(mockResult)
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-x-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(1, 205, 254, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(1, 205, 254, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* VHS noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 mix-blend-overlay">
        <div className="w-full h-full bg-noise animate-noise"></div>
      </div>

      <Header />
      <Hero />
      <UploadSection onFileAnalysis={handleFileAnalysis} isAnalyzing={isAnalyzing} />
      {analysisResult && <ResultsSection result={analysisResult} />}
      <Features />
      <Footer />
    </div>
  )
}

export default App
