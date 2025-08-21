import React from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info, Zap } from 'lucide-react'
import { AnalysisResult } from '../types'

interface ResultsSectionProps {
  result: AnalysisResult
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-400'
    if (confidence >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getConfidenceGradient = (confidence: number) => {
    if (confidence >= 80) return 'from-green-500 to-cyan-500'
    if (confidence >= 60) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              ANALYSIS RESULTS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Result */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                {result.isAIGenerated ? (
                  <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
                ) : (
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                )}
                
                <h3 className="text-2xl font-bold mb-2 font-orbitron">
                  {result.isAIGenerated ? (
                    <span className="text-red-400">AI GENERATED DETECTED</span>
                  ) : (
                    <span className="text-green-400">AUTHENTIC MEDIA</span>
                  )}
                </h3>
                
                <p className="text-cyan-300 font-orbitron text-sm">
                  {result.isAIGenerated 
                    ? 'This media appears to be artificially generated'
                    : 'This media appears to be genuine'
                  }
                </p>
              </div>

              {/* Confidence Score */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-300 font-orbitron text-sm tracking-wider">CONFIDENCE LEVEL</span>
                  <span className={`text-2xl font-bold font-orbitron ${getConfidenceColor(result.confidence)}`}>
                    {result.confidence.toFixed(1)}%
                  </span>
                </div>
                
                <div className="w-full h-4 bg-black/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getConfidenceGradient(result.confidence)} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-pink-400 font-orbitron mb-4">TECHNICAL DETAILS</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-cyan-300/70 font-orbitron">Resolution:</span>
                    <span className="text-cyan-300 ml-2 font-orbitron">{result.technicalDetails.resolution}</span>
                  </div>
                  <div>
                    <span className="text-cyan-300/70 font-orbitron">Format:</span>
                    <span className="text-cyan-300 ml-2 font-orbitron">{result.technicalDetails.format}</span>
                  </div>
                  <div>
                    <span className="text-cyan-300/70 font-orbitron">Size:</span>
                    <span className="text-cyan-300 ml-2 font-orbitron">{result.technicalDetails.size}</span>
                  </div>
                  {result.technicalDetails.duration && (
                    <div>
                      <span className="text-cyan-300/70 font-orbitron">Duration:</span>
                      <span className="text-cyan-300 ml-2 font-orbitron">{result.technicalDetails.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detection Methods & Risk Factors */}
          <div className="space-y-8">
            {/* Detection Methods */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-bold text-purple-400 font-orbitron">DETECTION METHODS</h4>
                </div>
                
                <div className="space-y-3">
                  {result.detectionMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-300 font-orbitron text-sm">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-lg font-bold text-yellow-400 font-orbitron">RISK FACTORS</h4>
                </div>
                
                <div className="space-y-3">
                  {result.riskFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                      <span className="text-cyan-300 font-orbitron text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Info className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-cyan-400 font-orbitron">RECOMMENDATION</h4>
                </div>
                
                <p className="text-cyan-300 font-orbitron text-sm leading-relaxed">
                  {result.isAIGenerated 
                    ? 'Exercise caution when sharing this content. Consider verifying through additional sources before distribution.'
                    : 'This media appears authentic based on our analysis. However, always verify important content through multiple sources.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12">
          <button className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-8 py-3 bg-black rounded-lg border border-pink-400/50">
              <span className="text-pink-300 font-orbitron tracking-wider">ANALYZE ANOTHER</span>
            </div>
          </button>
          
          <button className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-8 py-3 bg-black rounded-lg border border-cyan-400/50">
              <span className="text-cyan-300 font-orbitron tracking-wider">DOWNLOAD REPORT</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
