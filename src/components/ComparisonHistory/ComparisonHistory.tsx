import React, { FC } from 'react'
import { Copy, Trash2 } from 'lucide-react'
import { Comparison } from '@/types'
import { Button } from '../Button/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'

type ComparisonHistoryProps = {
  comparisons: Comparison[]
  onLoad: (comparison: Comparison) => void
  onDelete: (id: number) => void
}

export const ComparisonHistory: FC<ComparisonHistoryProps> = ({
  comparisons,
  onLoad,
  onDelete,
}) => (
  <>
    <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="border-b bg-gray-50">
        <CardTitle className="text-[#003B5C]">Saved Comparisons</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#00A4BD] transition-colors bg-white shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {new Date(comparison.date).toLocaleString()}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
                    {comparison.format.toUpperCase()}
                  </span>
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onLoad(comparison)}
                  className="text-[#00A4BD] border-[#00A4BD] hover:bg-[#00A4BD] hover:text-white"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Load
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(comparison.id)}
                  className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}

          {comparisons.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No saved comparisons yet
            </div>
          )}
        </div>
      </CardContent>
    </Card>
    {/* <Card>
    <CardHeader>
      <CardTitle>Comparison History</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {comparisons.map((comparison) => (
          <div
            key={comparison.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {new Date(comparison.date).toLocaleString()}
              </span>
              <span className="text-xs text-gray-500">
                Format: {comparison.format}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onLoad(comparison)}
              >
                <Copy className="w-4 h-4 mr-2" />
                Load
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(comparison.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card> */}
  </>
)
