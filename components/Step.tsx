'use client'

import React from 'react'

interface StepProps {
  number: number
  title: string
  children: React.ReactNode
}

export default function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B35] text-white font-bold text-sm flex items-center justify-center mt-1">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="dark:text-white text-gray-900 font-semibold text-lg mb-2">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  )
}
