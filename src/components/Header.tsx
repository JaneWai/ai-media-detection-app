import React from 'react'
import { Shield, Zap } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="relative z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 w-8 h-8 border-2 border-pink-500 rounded animate-spin opacity-50"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-orbitron">
            DeepScan
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-cyan-300 hover:text-pink-400 transition-colors font-orbitron text-sm tracking-wider">
            FEATURES
          </a>
          <a href="#how-it-works" className="text-cyan-300 hover:text-pink-400 transition-colors font-orbitron text-sm tracking-wider">
            HOW IT WORKS
          </a>
          <a href="#about" className="text-cyan-300 hover:text-pink-400 transition-colors font-orbitron text-sm tracking-wider">
            ABOUT
          </a>
        </div>

        <button className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-6 py-2 bg-black rounded-lg flex items-center space-x-2 border border-cyan-400/50">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-orbitron text-sm tracking-wider">SCAN NOW</span>
          </div>
        </button>
      </nav>
    </header>
  )
}

export default Header
