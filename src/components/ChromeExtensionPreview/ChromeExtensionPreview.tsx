import React, { FC } from 'react'
import { Check, Download, LucideIcon } from 'lucide-react'
import { ChromeSVGIcon } from '../SVG'
type IconComponent = LucideIcon | FC
type CustomIcon = {
  component: IconComponent
  isCustom?: boolean
}

type Feature = {
  title: string
  description: string
  icon: CustomIcon
}
export const ChromeExtensionSection = () => {
  const features: Array<Feature> = [
    {
      title: 'Quick Access',
      description: 'Compare text with just one click from your browser toolbar',
      icon: { component: ChromeSVGIcon, isCustom: true },
    },
    {
      title: 'Context Menu Integration',
      description:
        'Right-click to compare selected text with clipboard content',
      icon: { component: Check },
    },
    {
      title: 'Offline Support',
      description: 'Work without internet connection - your data stays local',
      icon: { component: Download },
    },
  ]

  const renderIcon = (icon: CustomIcon) => {
    const IconComponent = icon.component
    return icon.isCustom ? (
      <IconComponent />
    ) : (
      <IconComponent className="h-6 w-6 text-[#00A4BD]" />
    )
  }
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#003B5C] p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C] to-[#00A4BD] opacity-90"></div>
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Try Our Chrome Extension
              </h2>
              <p className="mt-4 text-lg text-gray-100">
                Compare text directly from your browser with our powerful Chrome
                extension. Quick access to all features without leaving your
                current page.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a
                  href="https://chromewebstore.google.com/detail/paralleltext/kgfhpigpogacdhompdnobjfjdgiohkoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-lg bg-white px-8 py-3 text-[#003B5C] hover:bg-gray-100 transition-colors"
                >
                  <div className="h-5 w-5">
                    <ChromeSVGIcon />
                  </div>
                  <span className="font-medium">Add to Chrome</span>
                  <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600">
                    Free
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-lg bg-white p-2 shadow-xl">
                <div className="flex items-center space-x-1 border-b pb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-sm text-gray-500">
                    ParallelText Extension
                  </div>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-gray-100">
                  {/* demo GIF */}
                  <div className="flex h-full items-center justify-center text-gray-400">
                    Extension Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extension Features */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white p-6 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00A4BD] bg-opacity-10">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
