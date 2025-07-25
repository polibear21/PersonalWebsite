'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

interface LandingProps {
  onTypingComplete?: () => void
}

export default function Landing({ onTypingComplete }: LandingProps) {
  const [showOtherElements, setShowOtherElements] = useState(false)

  const handleTypingComplete = () => {
    // Call the navbar callback immediately
    if (onTypingComplete) {
      onTypingComplete()
    }
    
    // Show other elements after 0.5 second delay
    setTimeout(() => {
      setShowOtherElements(true)
    }, 500)
  }

  return (
    <div className="relative h-screen w-full bg-[#001328] overflow-hidden">
      {/* Content */}
      <div className="container-max h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-6"
            >
              <Typewriter 
                text="Hi, I'm David Zhao" 
                speed={120}
                delay={2000}
                onComplete={handleTypingComplete}
                className="text-5xl lg:text-7xl font-bold text-white"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showOtherElements ? 1 : 0, y: showOtherElements ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-xl lg:text-2xl text-[#87A2BF] mb-8"
            >
              Full Stack Developer passionate about app and web app development. Also interested in AI and ML, I love applying my skills to different disciplines to create a change in the world.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showOtherElements ? 1 : 0, y: showOtherElements ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#04e3ff] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#03b8cc] transition-colors"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              Learn More About Me
            </motion.button>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: showOtherElements ? 0 : 100, opacity: showOtherElements ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#04e3ff] to-[#03b8cc] p-1">
                <div className="w-full h-full rounded-full bg-[#001328] p-2">
                  <div className="w-full h-full rounded-full bg-[#001328] flex items-center justify-center">
                    <span className="text-[#87A2BF] text-lg">
                      <img 
                        src="/assets/david.jpg" 
                        alt="David Zhao" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showOtherElements ? 1 : 0, y: showOtherElements ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-[#87A2BF]"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
} 