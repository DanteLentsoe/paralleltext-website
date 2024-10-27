import React, { useEffect, useState } from 'react'
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Database,
  Scale,
  Check,
} from 'lucide-react'
import Link from 'next/link'
import { Footer, NavigationMinified } from '@/components'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentSection = ''
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = section.id
          }
        }
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])
  const navigationItems = [
    { name: 'Overview', href: '#overview', icon: Eye },
    { name: 'Data Collection', href: '#data-collection', icon: Database },
    { name: 'Privacy Rights', href: '#privacy-rights', icon: Shield },
    { name: 'MIT License', href: '#mit-license', icon: FileText }, // Updated to match section ID
    { name: 'Security', href: '#security', icon: Lock },
    { name: 'Compliance', href: '#compliance', icon: Scale },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style jsx global>{`
        html {
          scroll-padding-top: 100px;
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Navigation */}
      <NavigationMinified />

      {/* Header */}
      <div className="bg-[#003B5C] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Privacy Policy & Terms
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Our commitment to privacy, transparency, and open source
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <nav className="space-y-1 rounded-lg bg-white p-4 shadow-sm">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium 
                      ${
                        activeSection === item.href.slice(1)
                          ? 'bg-[#00A4BD] text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#00A4BD]'
                      }
                      transition-colors`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                      })
                    }}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        activeSection === item.href.slice(1) ? 'text-white' : ''
                      }`}
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Overview Section */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-[#003B5C]">Overview</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>
                    ParallelText is an open-source text comparison tool
                    available as a web application and Chrome extension. This
                    privacy policy outlines how we handle your data and protect
                    your privacy.
                  </p>
                  <p>
                    As an open-source project under the MIT license, our code is
                    publicly available and can be audited by anyone.
                  </p>
                </div>
              </section>

              {/* Data Collection Section */}
              <section id="data-collection">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  Data Collection
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      What We Collect
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Local storage data for saved comparisons
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Basic usage analytics (opt-in)
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Error logs for debugging
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      What We Do not Collect
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Your comparison text content
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Personal identification information
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Browser history or browsing data
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Privacy Rights Section */}
              <section id="privacy-rights">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  Privacy Rights
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Your Rights
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Right to access your data
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Right to delete your stored comparisons
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Right to opt-out of analytics
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Data Control
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        All data is stored locally on your device
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        You can clear all stored data at any time
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        No data is shared with third parties
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* MIT License Section */}
              <section id="mit-license">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  MIT License
                </h2>
                <div className="mt-4 rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-gray-600">
                    Copyright (c) 2024 ParallelText
                  </p>
                  <div className="mt-4 space-y-4 text-gray-600">
                    <p>
                      Permission is hereby granted, free of charge, to any
                      person obtaining a copy of this software and associated
                      documentation files (the &quot;Software&quot;), to deal in
                      the Software without restriction, including without
                      limitation the rights to use, copy, modify, merge,
                      publish, distribute, sublicense, and/or sell copies of the
                      Software.
                    </p>
                    <p>
                      The above copyright notice and this permission notice
                      shall be included in all copies or substantial portions of
                      the Software.
                    </p>
                  </div>
                </div>
              </section>

              {/* Chrome Extension Permissions */}
              <section id="permissions">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  Extension Permissions
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Required Permissions
                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Storage: For saving your comparison history locally
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Clipboard: For comparing with clipboard content
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        Context Menu: For right-click functionality
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Updates Section */}
              <section id="updates">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  Policy Updates
                </h2>
                <div className="mt-4 rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-gray-600">
                    This policy was last updated on October 25, 2024. Any
                    changes to this policy will be posted on this page and, if
                    significant, announced via GitHub.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-[#003B5C]">
                  Contact Us
                </h2>
                <div className="mt-4 rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-gray-600">
                    For privacy-related questions or concerns:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="https://github.com/DanteLentsoe/comparsion-chromoe-extension/issues"
                        target="_blank"
                      >
                        {' '}
                        <span className="text-[#00A4BD] hover:underline">
                          Open an issue on GitHub
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={'mailto:danware.software@gmail.com'}>
                        {' '}
                        <span>Email us at: danware.software@gmail.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
