import { useState } from 'react'
import { Logo } from '../Logo/Logo'
import Link from 'next/link'
import { ChromeSVGIcon, GithubSVGIcon } from '../SVG'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - always visible */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://chromewebstore.google.com/detail/paralleltext/kgfhpigpogacdhompdnobjfjdgiohkoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-2 rounded-md bg-[#00A4BD] px-4 py-2 text-white hover:bg-[#008299] transition-colors">
                <div className="h-5 w-5">
                  <ChromeSVGIcon />
                </div>
                <span>Add to Chrome</span>
              </div>
            </Link>

            <a
              href="https://github.com/DanteLentsoe/comparsion-chromoe-extension"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <div className="h-5 w-5">
                <GithubSVGIcon />
              </div>

              <span>GitHub</span>
            </a>
            <Link href="/app">
              <button className="rounded-md bg-[#003B5C] px-4 py-2 text-white hover:bg-[#002B4C] transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A4BD]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <a
              href="https://chromewebstore.google.com/detail/paralleltext/kgfhpigpogacdhompdnobjfjdgiohkoh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-white bg-[#00A4BD] hover:bg-[#008299] transition-colors"
            >
              <div className="h-5 w-5">
                <ChromeSVGIcon />
              </div>
              <span>Add to Chrome</span>
            </a>

            <a
              href="https://github.com/DanteLentsoe/comparsion-chromoe-extension"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <div className="h-5 w-5">
                <GithubSVGIcon />
              </div>
              <span>GitHub</span>
            </a>

            <Link
              href="/app"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-white bg-[#003B5C] hover:bg-[#002B4C] transition-colors"
            >
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
