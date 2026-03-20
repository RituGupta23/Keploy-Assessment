'use client'

import React, { useState, useEffect } from 'react'

const sections = [
  { id: 'what-is-keploy', label: 'What is Keploy?' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'step-1-clone', label: 'Step 1: Clone the Sample Application' },
  { id: 'step-2-configure', label: 'Step 2: Configure the Database Host' },
  { id: 'step-3-start-recording', label: 'Step 3: Start Recording API Calls' },
  { id: 'step-4-generate-test-cases', label: 'Step 4: Generate Test Cases' },
  { id: 'step-5-understand-what-keploy-generated', label: 'Step 5: Understand What Keploy Generated' },
  { id: 'step-6-run-the-generated-test-cases', label: 'Step 6: Run the Generated Test Cases' },
  { id: 'why-use-keploy', label: "Why use Keploy?" },
  { id: 'wrapping-up', label: "Wrapping Up 🎉"}
]

export default function TableOfContents() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0% -60% 0%' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-20 text-md">
      <p className="text-md font-bold uppercase tracking-widest text-keploy-muted mb-3">
        On this page
      </p>
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1 transition-colors truncate ${
                active === id
                  ? 'text-[#FF6B35] font-medium'
                  : 'text-keploy-muted dark:hover:text-gray-300 hover:text-gray-900'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
