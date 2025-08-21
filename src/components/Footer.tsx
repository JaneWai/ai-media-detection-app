import React from 'react'
import { Shield, Github, Twitter, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-cyan-400/20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 border-2 border-pink-500 rounded animate-spin opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-orbitron">
                DeepScan
              </h3>
            </div>
            <p className="text-cyan-300/80 font-orbitron text-sm leading-relaxed mb-6 max-w-md">
              Protecting digital truth in the age of artificial intelligence. 
              Advanced media verification technology to combat deepfakes and synthetic content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-black/30 border border-cyan-400/30 rounded hover:border-pink-400/50 transition-colors">
                <Github className="w-5 h-5 text-cyan-400" />
              </a>
              <a href="#" className="p-2 bg-black/30 border border-cyan-400/30 rounded hover:border-pink-400/50 transition-colors">
                <Twitter className="w-5 h-5 text-cyan-400" />
              </a>
              <a href="#" className="p-2 bg-black/30 border border-cyan-400/30 rounded hover:border-pink-400/50 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-pink-400 mb-4 font-orbitron">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Features', 'How It Works', 'API Access', 'Documentation', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cyan-300/70 hover:text-cyan-300 transition-colors font-orbitron text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-4 font-orbitron">RESOURCES</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Research Papers', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cyan-300/70 hover:text-cyan-300 transition-colors font-orbitron text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400 font-orbitron mb-1">99.7%</div>
            <div className="text-cyan-300/70 font-orbitron text-xs">ACCURACY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 font-orbitron mb-1">2.3M+</div>
            <div className="text-cyan-300/70 font-orbitron text-xs">FILES ANALYZED</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 font-orbitron mb-1">150K+</div>
            <div className="text-cyan-300/70 font-orbitron text-xs">USERS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 font-orbitron mb-1">24/7</div>
            <div className="text-cyan-300/70 font-orbitron text-xs">UPTIME</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cyan-300/70 font-orbitron text-sm">
              © 2024 DeepScan. All rights reserved. Fighting digital deception since 2024.
            </p>
            <div className="flex items-center space-x-2 text-cyan-300/70 font-orbitron text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
              <span>for digital truth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/20 rotate-45 opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-pink-500/20 rounded-full opacity-30"></div>
    </footer>
  )
}

export default Footer
