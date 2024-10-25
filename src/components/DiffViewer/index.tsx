import React from 'react'
import { FormatType } from '@/types'
import { Card, CardContent } from '../Card'

interface DiffViewerProps {
  leftText: string
  rightText: string
  format: FormatType
  highlightedDiffs: {
    left: number[]
    right: number[]
  }
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
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
    <Card>
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
                      highlightedDiffs.right.includes(idx) ? 'bg-green-100' : ''
                    }`}
                  >
                    {line}
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
