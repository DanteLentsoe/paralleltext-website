import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
const DEFAULT_SEO = {
  title: 'ParallelText - Advanced Text Comparison Tool',
  titleTemplate: '%s | ParallelText',
  defaultTitle: 'ParallelText - Advanced Text Comparison Tool',
  description:
    'A sophisticated text comparison tool that enables developers and content creators to efficiently compare and analyze textual differences between code snippets, documents, and various text formats.',
  canonical: 'https://dantelentsoe.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dantelentsoe.com',
    siteName: 'ParallelText',
    title: 'ParallelText - Advanced Text Comparison Tool',
    description:
      'Compare text, code, and documents with precision. Built for developers and content creators.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ParallelText',
      },
    ],
  },

  additionalMetaTags: [
    {
      name: 'author',
      content: 'Dante L. Lentsoe',
    },
    {
      name: 'keywords',
      content:
        'text comparison, code comparison, diff tool, text diff, JSON formatter, SQL formatter, chrome extension, developer tools',
    },
  ],
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  )
}
