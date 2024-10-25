import React from 'react'
import { Github } from 'lucide-react'

export const Header: React.FC = () => (
  <header className="border-b">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">TextDiff</h1>
        <p className="text-sm text-gray-500">by Dante Lentsoe</p>
      </div>
      <a
        href="https://github.com/dantelentsoe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
      >
        <Github size={20} />
        <span>GitHub</span>
      </a>
    </div>
  </header>
)
