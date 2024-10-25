import { useEffect, useState } from 'react'
import { Comparison, DiffHighlight, FormatType } from '@/types'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button/Button'
import { ArrowRightLeft, Save } from 'lucide-react'
import { DiffViewer } from '@/components/DiffViewer'
import { ComparisonHistory } from '@/components/ComparisonHistory'
import { Select } from '@/components/Select/Select'

export default function Home() {
  const [leftText, setLeftText] = useState<string>('')
  const [rightText, setRightText] = useState<string>('')
  const [format, setFormat] = useState<FormatType>('text')
  const [savedComparisons, setSavedComparisons] = useState<Comparison[]>([])
  const [highlightedDiffs, setHighlightedDiffs] = useState<DiffHighlight>({
    left: [],
    right: [],
  })

  useEffect(() => {
    const saved = localStorage.getItem('savedComparisons')
    if (saved) {
      setSavedComparisons(JSON.parse(saved))
    }
  }, [])

  const findDifferences = () => {
    const leftLines = leftText.split('\n')
    const rightLines = rightText.split('\n')

    const leftDiffs: number[] = []
    const rightDiffs: number[] = []

    const maxLines = Math.max(leftLines.length, rightLines.length)

    for (let i = 0; i < maxLines; i++) {
      if (leftLines[i] !== rightLines[i]) {
        leftDiffs.push(i)
        rightDiffs.push(i)
      }
    }

    setHighlightedDiffs({ left: leftDiffs, right: rightDiffs })
  }

  const saveComparison = () => {
    const newComparison: Comparison = {
      id: Date.now(),
      leftText,
      rightText,
      format,
      date: new Date().toISOString(),
    }

    const updatedComparisons = [...savedComparisons, newComparison]
    setSavedComparisons(updatedComparisons)
    localStorage.setItem('savedComparisons', JSON.stringify(updatedComparisons))
  }

  const loadComparison = (comparison: Comparison) => {
    setLeftText(comparison.leftText)
    setRightText(comparison.rightText)
    setFormat(comparison.format)
  }

  const deleteComparison = (id: number) => {
    const updatedComparisons = savedComparisons.filter((c) => c.id !== id)
    setSavedComparisons(updatedComparisons)
    localStorage.setItem('savedComparisons', JSON.stringify(updatedComparisons))
  }
  const formatOptions = [
    { value: 'text', label: 'Plain Text' },
    { value: 'json', label: 'JSON' },
    { value: 'sql', label: 'SQL' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
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

        <div className="grid grid-cols-2 gap-4 mb-8">
          <textarea
            className="w-full h-64 p-4 font-mono text-sm border rounded"
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="Enter first text..."
          />
          <textarea
            className="w-full h-64 p-4 font-mono text-sm border rounded"
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="Enter second text..."
          />
        </div>

        <Button
          className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-500 
             hover:from-primary-700 hover:to-primary-600 
             text-white font-medium px-8 py-2 rounded-lg 
             transform transition-all duration-200 
             shadow-lg hover:shadow-xl 
             border border-primary-400 
             flex items-center justify-center gap-2 
             text-lg focus:outline-none focus:ring-2 
             focus:ring-primary-500 focus:ring-offset-2"
          onClick={findDifferences}
        >
          <ArrowRightLeft className="w-5 h-5" />
          Compare
        </Button>

        <DiffViewer
          leftText={leftText}
          rightText={rightText}
          format={format}
          highlightedDiffs={highlightedDiffs}
        />

        <div className="mt-8">
          <ComparisonHistory
            comparisons={savedComparisons}
            onLoad={loadComparison}
            onDelete={deleteComparison}
          />
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} TextDiff by Dante Lentsoe. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
