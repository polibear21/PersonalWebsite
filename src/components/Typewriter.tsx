'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function Typewriter({ text, speed = 100, delay = 0, className = '', onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true)
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (hasStarted && currentIndex >= text.length) {
      setIsTyping(false)
      if (onComplete) {
        onComplete()
      }
    }
  }, [currentIndex, text, speed, hasStarted, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <span className="text-white">
        {displayText}
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-[#04e3ff] ml-1"
          >
            |
          </motion.span>
        )}
      </span>
    </motion.div>
  )
} 