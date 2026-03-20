'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Github, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'dark:bg-[#0f0f0f]/95 bg-white/95 backdrop-blur border-b dark:border-[#2a2a2a] border-gray-200'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="https://keploy.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <span className="text-2xl">🐰</span>
          <span className="font-bold dark:text-white text-gray-900 text-lg">Keploy</span>
          <span className="text-keploy-muted text-sm hidden sm:block">/ docs</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border dark:border-[#2a2a2a] border-gray-200 dark:bg-[#1a1a1a] bg-white dark:text-gray-300 text-gray-600 hover:border-[#FF6B35]/50 transition-all flex items-center justify-center shadow-sm"
          >
           <Github />
          </a>
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full border dark:border-[#2a2a2a] border-gray-200 dark:bg-[#1a1a1a] bg-white dark:text-gray-300 text-gray-600 hover:border-[#FF6B35]/50 transition-all flex items-center justify-center shadow-sm"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
