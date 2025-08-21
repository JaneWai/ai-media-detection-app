import React from 'react'
import { Eye, Cpu, Shield } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-bounce opacity-50"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-pink-500/30 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rotate-45 animate-spin opacity-30"></div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
              DETECT
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              THE FAKE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 mb-12 max-w-4xl mx-auto leading-relaxed font-orbitron tracking-wide">
            Advanced AI-powered verification system to identify deepfakes, 
            AI-generated images, and manipulated media content with 
            <span className="text-pink-400 font-bold"> 99.7% accuracy</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-16">
            <div className="flex items-center space-x-3 text-cyan-300">
              <Eye className="w-8 h-8 text-pink-500 animate-pulse" />
              <span className="font-orbitron text-lg">VISUAL ANALYSIS</span>
            </div>
            <div className="flex items-center space-x-3 text-cyan-300">
              <Cpu className="w-8 h-8 text-purple-400 animate-pulse" />
              <span className="font-orbitron text-lg">NEURAL NETWORKS</span>
            </div>
            <div className="flex items-center space-x-3 text-cyan-300">
              <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
              <span className="font-orbitron text-lg">SECURE PROCESSING</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-pink-400 font-orbitron mb-2">99.7%</div>
                <div className="text-cyan-300 font-orbitron text-sm tracking-wider">ACCURACY RATE</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-pink-400/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-cyan-400 font-orbitron mb-2">2.3M+</div>
                <div className="text-cyan-300 font-orbitron text-sm tracking-wider">FILES ANALYZED</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-purple-400 font-orbitron mb-2">{"<3s"}</div>
                <div className="text-cyan-300 font-orbitron text-sm tracking-wider">ANALYSIS TIME</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
