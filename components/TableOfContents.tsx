'use client'

import React, { useState, useEffect } from 'react'

const sections = [
  { id: 'what-is-keploy', label: 'What is Keploy?' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'the-app-well-use', label: 'The App We\'ll Use' },
  { id: 'step-1-install-keploy', label: 'Step 1: Install Keploy' },
  { id: 'step-2-clone-the-app', label: 'Step 2: Clone the App' },
  { id: 'step-3-start-postgres', label: 'Step 3: Start Postgres' },
  { id: 'step-4-run-the-app', label: 'Step 4: Run the App' },
  { id: 'step-5-record-test-cases', label: 'Step 5: Record Tests' },
  { id: 'step-6-run-tests', label: 'Step 6: Run Tests' },
  { id: 'catch-a-bug', label: 'Catch a Bug 🐛' },
  { id: 'whats-next', label: "What's Next?" },
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
      <p className="text-xs font-semibold uppercase tracking-widest text-keploy-muted mb-3">
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
