import React, { FC } from 'react'
import { FormatType } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'

type DiffViewerProps = {
  leftText: string
  rightText: string
  format: FormatType
  highlightedDiffs: {
    left: number[]
    right: number[]
  }
}

export const DiffViewer: FC<DiffViewerProps> = ({
  leftText,
  rightText,
  format,
  highlightedDiffs,
}) => {
  const formatText = (text: string, format: FormatType): string => {
    try {
      switch (format) {
        case 'json':
          return JSON.stringify(JSON.parse(text), null, 2)
        case 'sql':
          return text
            .replace(/\s+/g, ' ')
            .replace(
              /(SELECT|FROM|WHERE|AND|OR|ORDER BY|GROUP BY|HAVING)/gi,
              '\n$1',
            )
            .trim()
        default:
          return text
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      }
      return text
    }
  }

  return (
    <>
      <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
        <CardHeader>
          <CardTitle>Comparison Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Panel */}
            <div className="relative">
              <div className="absolute top-0 left-0 p-2 bg-[#003B5C] text-white text-xs font-medium rounded-tr rounded-bl">
                Original Text
              </div>
              <div className="border rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                <div className="p-4 space-y-1">
                  {formatText(leftText, format)
                    .split('\n')
                    .map((line, idx) => (
                      <div
                        key={idx}
                        className={`font-mono text-sm px-2 py-0.5 rounded ${
                          highlightedDiffs.left.includes(idx)
                            ? 'bg-red-100 text-red-800'
                            : 'text-gray-700'
                        }`}
                      >
                        {line || '\u00A0'}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="relative">
              <div className="absolute top-0 left-0 p-2 bg-[#00A4BD] text-white text-xs font-medium rounded-tr rounded-bl">
                Compared Text
              </div>
              <div className="border rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                <div className="p-4 space-y-1">
                  {formatText(rightText, format)
                    .split('\n')
                    .map((line, idx) => (
                      <div
                        key={idx}
                        className={`font-mono text-sm px-2 py-0.5 rounded ${
                          highlightedDiffs.right.includes(idx)
                            ? 'bg-green-100 text-green-800'
                            : 'text-gray-700'
                        }`}
                      >
                        {line || '\u00A0'}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <Card>
        <div className="p-4">
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded p-4 bg-gray-50">
                {formatText(leftText, format)
                  .split('\n')
                  .map((line, idx) => (
                    <div
                      key={idx}
                      className={`font-mono text-sm ${
                        highlightedDiffs.left.includes(idx) ? 'bg-red-100' : ''
                      }`}
                    >
                      {line}
                    </div>
                  ))}
              </div>
              <div className="border rounded p-4 bg-gray-50">
                {formatText(rightText, format)
                  .split('\n')
                  .map((line, idx) => (
                    <div
                      key={idx}
                      className={`font-mono text-sm ${
                        highlightedDiffs.right.includes(idx)
                          ? 'bg-green-100'
                          : ''
                      }`}
                    >
                      {line}
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card> */}
    </>
  )
}
