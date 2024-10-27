import React, { FC } from 'react'
import Link from 'next/link'
import { GithubSVGIcon } from '../SVG'
import { Logo } from '../Logo'

export const Header: FC = () => (
  <header className="border-b">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
      </div>
      <Link
        href="https://github.com/dantelentsoe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
      >
        <GithubSVGIcon />
        <span>GitHub</span>
      </Link>
    </div>
  </header>
)
