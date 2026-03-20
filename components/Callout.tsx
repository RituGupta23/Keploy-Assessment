'use client'

import React from 'react'

type CalloutType = 'info' | 'warning' | 'success' | 'tip'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const styles: Record<CalloutType, { border: string; icon: string; label: string; bg: string; titleColor: string }> = {
  info: {
    border: 'border-blue-500',
    bg: 'bg-blue-500/10',
    icon: 'ℹ️',
    label: 'Info',
    titleColor: 'text-blue-400',
  },
  warning: {
    border: 'border-yellow-600',
    bg: 'bg-yellow-600/10',
    icon: '',
    label: 'Warning',
    titleColor: 'text-yellow-600',
  },
  success: {
    border: 'border-green-500',
    bg: 'bg-green-500/10',
    icon: '✅',
    label: 'Success',
    titleColor: 'text-green-400',
  },
  tip: {
    border: 'border-keploy-orange',
    bg: 'dark:bg-orange-500/10 bg-orange-50',
    icon: '💡',
    label: 'Tip',
    titleColor: 'text-keploy-orange',
  },
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const s = styles[type]
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} rounded-r-xl p-4 mb-4`}>
      <div className={`flex text-xl items-center gap-2 font-semibold mb-1 ${s.titleColor}`}>
        <span>{s.icon}</span>
        <span>{title || s.label}</span>
      </div>
      <div className="dark:text-gray-300 text-gray-600 text-base leading-6">{children}</div>
    </div>
  )
}
