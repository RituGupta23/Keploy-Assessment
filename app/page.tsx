import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'
import TableOfContents from '@/components/TableOfContents'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen dark:bg-[#0f0f0f] bg-gray-50 dark:text-white text-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />

          <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 flex gap-12">
            {/* Main content */}
            <main className="flex-1 min-w-0 max-w-4xl">
              {children}
            </main>

            {/* TOC sidebar */}
            <aside className="lg:block">
              <TableOfContents />
            </aside>
          </div>

          {/* Footer */}
          <footer className="border-t dark:border-[#2a2a2a] border-gray-200 py-6 text-center dark:text-[#888] text-gray-500 text-sm">
            Built for Keploy · Powered by Keploy + MDX
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
