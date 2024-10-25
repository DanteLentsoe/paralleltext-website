import React from 'react'
import { Copy, Trash2 } from 'lucide-react'
import { Comparison } from '@/types'
import { Button } from '../Button/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'

interface ComparisonHistoryProps {
  comparisons: Comparison[]
  onLoad: (comparison: Comparison) => void
  onDelete: (id: number) => void
}

export const ComparisonHistory: React.FC<ComparisonHistoryProps> = ({
  comparisons,
  onLoad,
  onDelete,
}) => (
  <Card>
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
  </Card>
)
