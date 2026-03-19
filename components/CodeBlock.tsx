'use client'

import React, { useState } from 'react'

interface CodeBlockProps {
  code: string
  filename?: string
}

export default function CodeBlock({ code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border dark:border-[#2a2a2a] border-gray-200 overflow-hidden mb-4">

      <div className="flex items-center justify-between px-4 py-2 dark:bg-[#1a1a1a] bg-gray-50 border-b dark:border-[#2a2a2a] border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          {filename && (
            <span className="text-xs text-keploy-muted font-mono ml-2 uppercase tracking-tight">{filename}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-keploy-muted hover:text-[#FF6B35] transition-colors px-2 py-1 rounded border border-keploy-border hover:border-[#FF6B35]/40"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      <pre className="p-4 overflow-x-auto text-sm dark:text-gray-200 text-gray-700 font-mono leading-6 dark:bg-[#0a0a0a] bg-white">
        <code>{code}</code>
      </pre>
    </div>
  )
}
