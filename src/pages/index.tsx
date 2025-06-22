'use client'

import { useState } from 'react'
import Head from 'next/head'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Sections from '@/sections'

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleTypingComplete = () => {
    setTimeout(() => {
      setShowNavbar(true)
    }, 500)
  }

  return (
    <>
      <Head>
        <title>David Zhao - Full Stack Developer Portfolio</title>
        <meta name="description" content="David Zhao is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and get in touch!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://davidzhao.dev/" />
        <meta property="og:title" content="David Zhao - Full Stack Developer Portfolio" />
        <meta property="og:description" content="David Zhao is a passionate full-stack developer specializing in React, Next.js, and modern web technologies." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://davidzhao.dev/" />
        <meta property="twitter:title" content="David Zhao - Full Stack Developer Portfolio" />
        <meta property="twitter:description" content="David Zhao is a passionate full-stack developer specializing in React, Next.js, and modern web technologies." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>

      <main className="min-h-screen">
        <Navbar showNavbar={showNavbar} />
        <Landing onTypingComplete={handleTypingComplete} />
        <Sections />
      </main>
    </>
  )
} 