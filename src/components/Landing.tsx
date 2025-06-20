import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import MountainScene from './MountainScene'

export default function Landing() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
    // Delay showing content for smooth transition
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 3D Mountain Scene */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        animationComplete ? 'opacity-0' : 'opacity-100'
      }`}>
        <Canvas
          shadows
          camera={{ position: [0, 5, 15], fov: 75 }}
          style={{ background: 'linear-gradient(to bottom, #1E40AF, #3B82F6)' }}
        >
          <MountainScene onAnimationComplete={handleAnimationComplete} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-white"
          >
            <div className="container-max h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side - Text */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                    Hi, I'm{' '}
                    <span className="gradient-text">David Zhao</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                    Full Stack Developer passionate about creating beautiful, 
                    functional, and user-centered digital experiences.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
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
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-blue-600 p-1">
                      <div className="w-full h-full rounded-full bg-white p-2">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-lg">
                            David Zhao
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-gray-500"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 