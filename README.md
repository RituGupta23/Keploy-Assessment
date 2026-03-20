# Keploy Assessment Tutorial

A modern, MDX-powered documentation site providing a comprehensive tutorial on **API Testing with Keploy** for Go, Echo, and PostgreSQL applications.

## 🚀 Features

- **MDX-Powered Content**: Rich documentation with custom components.
- **Interactive Sidebar**: Dynamic Table of Contents for easy navigation.
- **Dark/Light Mode**: Seamless theme switching for better readability.
- **Custom UI Components**: 
  - `Callout`: Highlight important tips, warnings, and info.
  - `CodeBlock`: Beautiful syntax highlighting for terminal commands and code snippets.
  - `Step`: Clear markers for tutorial progress.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Content**: [MDX](https://mdxjs.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏃 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RituGupta23/Keploy-Assessment.git
   cd Keploy-Assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the tutorial.

## 📂 Project Structure

- `app/`: Next.js App Router and global styles.
  - `page.mdx`: The main tutorial content.
  - `layout.tsx`: Root layout with ThemeProvider and Navbar.
- `components/`: Reusable UI components.
  - `Navbar.tsx`: Header with theme toggler.
  - `TableOfContents.tsx`: Interactive sidebar.
  - `Callout.tsx`, `CodeBlock.tsx`, `Step.tsx`: MDX components.
- `public/`: Static assets (images, etc.).
