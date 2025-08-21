import React from 'react'
import { Brain, Shield, Zap, Eye, Database, Lock } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'NEURAL ANALYSIS',
      description: 'Advanced deep learning algorithms trained on millions of authentic and synthetic media samples',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Eye,
      title: 'PIXEL FORENSICS',
      description: 'Microscopic analysis of pixel patterns, compression artifacts, and digital fingerprints',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'REAL-TIME PROCESSING',
      description: 'Lightning-fast analysis with results delivered in under 3 seconds for most media files',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'DEEPFAKE DETECTION',
      description: 'Specialized algorithms to identify face swaps, voice synthesis, and other deepfake techniques',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'METADATA VERIFICATION',
      description: 'Comprehensive analysis of EXIF data, creation timestamps, and device signatures',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'PRIVACY FIRST',
      description: 'All processing happens locally - your media never leaves your device or gets stored',
      gradient: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              ADVANCED FEATURES
            </span>
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto font-orbitron tracking-wide">
            Cutting-edge technology to protect you from digital deception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300 font-orbitron">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-cyan-300/80 font-orbitron text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-pink-500/30 rotate-45 opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-cyan-500/30 rounded-full opacity-30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron" id="how-it-works">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                HOW IT WORKS
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'UPLOAD', desc: 'Drop your media file into our secure analyzer' },
              { step: '02', title: 'ANALYZE', desc: 'AI algorithms examine every pixel and metadata' },
              { step: '03', title: 'DETECT', desc: 'Multiple detection methods identify anomalies' },
              { step: '04', title: 'REPORT', desc: 'Receive detailed analysis with confidence score' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-orbitron text-lg">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-30"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2 font-orbitron">{item.title}</h4>
                <p className="text-cyan-300/70 font-orbitron text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
