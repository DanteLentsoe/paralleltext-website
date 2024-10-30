import { Footer, NavigationMinified } from '@/components'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Changelog() {
  const releases = [
    {
      version: '1.0.0',
      date: '2024-10-25',
      changes: [
        'Initial release',
        'Basic text comparison functionality',
        'JSON and SQL formatting support',
        'Local storage for comparisons',
      ],
    },
  ]

  return (
    <>
      <NextSeo
        title="Changelog"
        description="Latest updates and improvements to ParallelText text comparison tool"
        openGraph={{
          title: 'ParallelText Changelog',
          description: 'Stay updated with the latest features and improvements',
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <NavigationMinified />

        <div className="flex-grow">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#003B5C] mb-8">
              Changelog
            </h1>

            <div className="space-y-8">
              {releases.map((release) => (
                <div
                  key={release.version}
                  className="rounded-xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl font-bold text-[#003B5C]">
                        Version {release.version}
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00A4BD] bg-opacity-10 text-[#00A4BD] text-sm font-medium">
                        Latest
                      </span>
                    </div>
                    <time className="text-gray-500 text-lg">
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {release.changes.map((change, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600 text-lg leading-relaxed"
                      >
                        <span className="mr-4 text-[#00A4BD] text-xl">•</span>
                        <span className="flex-1">{change}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional: Add more details section */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        New Features
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Improvements
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        Bug Fixes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: Add a newsletter subscription */}
            <div className="mt-12 rounded-xl bg-gradient-to-r from-[#003B5C] to-[#00A4BD] p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold">Stay Updated</h3>
                  <p className="mt-1 text-gray-200">
                    Get notified about new releases and features
                  </p>
                </div>
                <Link
                  href="https://github.com/DanteLentsoe/comparsion-chromoe-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#003B5C] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Follow on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
