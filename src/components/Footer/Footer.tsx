import React, { FC } from 'react'
import Link from 'next/link'
import { Logo } from '../Logo'

type FooterProps = {
  size?: 'small' | 'large'
}
export const Footer: FC<FooterProps> = () => {
  const resourcesLinks = [
    {
      title: 'Documentation',
      href:
        'https://github.com/DanteLentsoe/comparsion-chromoe-extension/blob/master/README.md',
    },
    {
      title: 'Changelog',
      href: '/changelog',
    },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy',
    },
  ]

  const connectLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/DanteLentsoe/comparsion-chromoe-extension',
    },
    {
      title: 'Contact',
      href: 'mailto:danware.software@gmail.com',
    },
    {
      title: 'Chrome Extension',
      href:
        'https://chromewebstore.google.com/detail/paralleltext/kgfhpigpogacdhompdnobjfjdgiohkoh',
    },
  ]

  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white">
      <div className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8`}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo mode="light" />
            <p className="mt-4 text-gray-400">
              Making text comparison simple and efficient
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resourcesLinks?.map((resource) => {
                return (
                  <li key={resource?.title}>
                    <Link
                      href={resource?.href}
                      className="text-gray-400 hover:text-white"
                    >
                      {resource?.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              {connectLinks?.map((connect) => {
                return (
                  <li key={connect?.title}>
                    <Link
                      href={connect?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      {connect?.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {year} ParallelText. All rights reserved.{' '}
          </p>
          <Link href={'https:dantelentsoe.com'} target="_blank">
            <p className=" text-gray-400">
              by <span className="text-[#00A4BD]">Dante Lentsoe</span>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
