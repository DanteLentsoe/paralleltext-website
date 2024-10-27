import React, { MouseEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ChromeExtensionSection, Navigation } from '@/components'
import { Footer } from '@/components/Footer/Footer'
import Link from 'next/link'

export default function LandingPage() {
  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const features = [
    'Side-by-side comparison',
    'Multiple format support (Text, JSON, SQL)',
    'Real-time difference highlighting',
    'Save and load comparisons',
    'Easy-to-use interface',
    'Keyboard shortcuts',
  ]

  const usageFeatures = [
    {
      title: 'Smart Comparison',
      description:
        'Advanced algorithms to detect even the smallest differences',
      color: 'from-[#003B5C] to-[#002B4C]',
    },
    {
      title: 'Format Support',
      description: 'Support for plain text, JSON, SQL, and more formats',
      color: 'from-[#00A4BD] to-[#008299]',
    },
    {
      title: 'Cloud Storage',
      description: 'Save and access your comparisons from anywhere',
      color: 'from-[#4CAF50] to-[#388E3C]',
    },
    {
      title: 'Real-time Updates',
      description: 'See differences as you type with instant highlighting',
      color: 'from-[#003B5C] to-[#002B4C]',
    },
    {
      title: 'Export Options',
      description: 'Export your comparisons in various formats',
      color: 'from-[#00A4BD] to-[#008299]',
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Boost your productivity with keyboard shortcuts',
      color: 'from-[#4CAF50] to-[#388E3C]',
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left Column */}
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Compare Text with
                <span className="block text-[#00A4BD]">Precision and Ease</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                A powerful text comparison tool that helps you identify
                differences between documents, code, and text snippets quickly
                and efficiently.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link href={'/app'}>
                  <button className="flex items-center space-x-2 rounded-md bg-[#003B5C] px-6 py-3 text-white hover:bg-[#002B4C] transition-colors">
                    <span>Try It Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>{' '}
                </Link>
                <Link
                  href={'#about'}
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                  <button className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>{' '}
                </Link>
              </div>
            </div>

            {/* Right Column - Feature List */}
            <div className="lg:pl-8">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  Key Features
                </h3>
                <div className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A4BD] bg-opacity-10">
                        <Check className="h-5 w-5 text-[#00A4BD]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChromeExtensionSection />
      {/* Features Grid */}
      <div className="bg-white py-24" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose ParallelText?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The perfect tool for developers, writers, and anyone who needs to
              compare text
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {usageFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-white p-6 shadow-lg"
              >
                <div
                  className={`absolute top-0 left-0 h-2 w-full rounded-t-xl bg-gradient-to-r ${feature.color}`}
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
