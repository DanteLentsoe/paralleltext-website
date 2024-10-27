import Link from 'next/link'
import React from 'react'
import { GithubSVGIcon } from '../SVG'

export const NavigationMinified = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={'/'}>
            {' '}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-[#003B5C]">PARALLEL</span>
                <span className="text-[#00A4BD]">TEXT</span>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              target="_blank"
              href="https://github.com/dantelentsoe"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <GithubSVGIcon />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
