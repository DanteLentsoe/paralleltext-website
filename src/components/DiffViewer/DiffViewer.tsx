import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'
import { ArrowRightLeft, Save } from 'lucide-react'
import { Button } from '../Button'
import { isTextEmpty } from '@/utils/isTextEmpty'
import { Select } from '../Select'
import { DiffHighlight } from '@/types'

type DiffViewerProps = {
  leftText: string
  rightText: string
  format: string
  highlightedDiffs: DiffHighlight
  showValidation: boolean
  saveComparison: () => void
  handleLeftTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleRightTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  setFormat: Dispatch<SetStateAction<string>>
  findDifferences: () => void
  formatOptions: {
    value: string
    label: string
  }[]
}

export const DiffViewer: FC<DiffViewerProps> = ({
  leftText,
  rightText,
  format,
  handleLeftTextChange,
  handleRightTextChange,
  findDifferences,
  formatOptions,
  showValidation,
  highlightedDiffs,
  setFormat,
  saveComparison,
}) => {
  const formatText = (text: string, format: string) => {
    try {
      switch (format) {
        case 'json':
          return JSON.stringify(JSON.parse(text), null, 2)
        case 'sql':
          // Basic SQL formatting - could be enhanced
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
      <Card className="mb-4 w-full">
        <CardHeader>
          <div className="mb-8 flex justify-between items-center px-4">
            <Select
              value={format}
              onValueChange={setFormat}
              options={formatOptions}
              placeholder="Format"
              className="w-32"
            />

            <Button variant="outline" onClick={saveComparison}>
              <Save className="w-4 h-4 mr-2" />
              Save Comparison
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <textarea
                className={`w-full h-96 p-2 font-mono text-sm border rounded
        ${
          showValidation && isTextEmpty(leftText)
            ? 'border-red-300'
            : 'border-gray-300'
        }
        focus:outline-none focus:ring-2 
        ${
          showValidation && isTextEmpty(leftText)
            ? 'focus:ring-red-500'
            : 'focus:ring-primary-500'
        }
      `}
                value={leftText}
                onChange={handleLeftTextChange}
                placeholder="Enter first text..."
              />
            </div>
            <div>
              <textarea
                className={`w-full h-96 p-2 font-mono text-sm border rounded
        ${
          showValidation && isTextEmpty(rightText)
            ? 'border-red-300'
            : 'border-gray-300'
        }
        focus:outline-none focus:ring-2 
        ${
          showValidation && isTextEmpty(rightText)
            ? 'focus:ring-red-500'
            : 'focus:ring-primary-500'
        }
      `}
                value={rightText}
                onChange={handleRightTextChange}
                placeholder="Enter second text..."
              />
            </div>
          </div>

          {showValidation && (isTextEmpty(leftText) || isTextEmpty(rightText)) && (
            <div className="flex items-center justify-center mt-4 mb-2">
              <span className="text-sm text-red-500 flex items-center gap-2 bg-red-50 px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {isTextEmpty(leftText) && isTextEmpty(rightText)
                  ? 'Both fields are empty'
                  : isTextEmpty(leftText)
                  ? 'Left field is empty'
                  : 'Right field is empty'}
              </span>
            </div>
          )}

          <Button
            onClick={findDifferences}
            className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-500 
             hover:from-primary-700 hover:to-primary-600 
             text-white font-medium px-8 py-2 rounded-lg 
             transform transition-all duration-200 
             shadow-lg hover:shadow-xl 
             border border-primary-400 
             flex items-center justify-center gap-2 
             text-lg focus:outline-none focus:ring-2 
             focus:ring-primary-500 focus:ring-offset-2"
          >
            <ArrowRightLeft className="w-5 h-5" />
            Compare
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="px-4">Differences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {formatText(leftText, format)
                .split('\n')
                .map(
                  (
                    line:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<unknown>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined,
                    idx: React.Key | null | undefined,
                  ) => (
                    <div
                      key={idx}
                      className={`font-mono text-sm ${
                        highlightedDiffs.left.includes(idx as never)
                          ? 'bg-red-100'
                          : ''
                      }`}
                    >
                      {line}
                    </div>
                  ),
                )}
            </div>
            <div>
              {formatText(rightText, format)
                .split('\n')
                .map(
                  (
                    line:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<unknown>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined,
                    idx: React.Key | null | undefined,
                  ) => (
                    <div
                      key={idx}
                      className={`font-mono text-sm ${
                        highlightedDiffs.right.includes(idx as never)
                          ? 'bg-green-100'
                          : ''
                      }`}
                    >
                      {line}
                    </div>
                  ),
                )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
