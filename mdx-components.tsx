import type { MDXComponents } from 'mdx/types'
import Callout from '@/components/Callout'
import CodeBlock from '@/components/CodeBlock'
import Step from '@/components/Step'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold dark:text-white text-gray-900 mb-3 mt-10 pb-2 border-b dark:border-[#2a2a2a] border-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="dark:text-gray-300 text-gray-600 leading-7 mb-4">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-[#FF6B35] underline underline-offset-2 hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside dark:text-gray-300 text-gray-600 mb-4 space-y-1 pl-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside dark:text-gray-300 text-gray-600 mb-4 space-y-1 pl-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="dark:bg-[#1a1a1a] bg-gray-50">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left px-4 py-2 dark:text-gray-300 text-gray-700 font-semibold border dark:border-[#2a2a2a] border-gray-200">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 dark:text-gray-300 text-gray-700 border dark:border-[#2a2a2a] border-gray-200">
        {children}
      </td>
    ),
    code: ({ children, className }) => {
      if (!className) {
        return (
          <code className="dark:bg-[#1a1a1a] bg-gray-100 text-[#FF6B35] px-1.5 py-0.5 rounded text-sm font-mono border dark:border-[#2a2a2a] border-gray-200">
            {children}
          </code>
        )
      }
      return <code className={className}>{children}</code>
    },
    pre: ({ children }) => (
      <pre className="dark:bg-[#0a0a0a] bg-white border dark:border-[#2a2a2a] border-gray-200 rounded-xl p-4 overflow-x-auto mb-4 text-sm font-mono dark:text-gray-200 text-gray-700">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FF6B35] pl-4 italic dark:text-gray-400 text-gray-500 mb-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="dark:border-[#2a2a2a] border-gray-200 my-8" />,
    Callout,
    Step,
    CodeBlock,
    ...components,
  }
}
