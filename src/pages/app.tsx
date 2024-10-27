import { ChangeEvent, useEffect, useState } from 'react'
import { DiffHighlight } from '@/types'
import { Header } from '@/components/Header/Header'
import { DiffViewer } from '@/components/DiffViewer/DiffViewer'
import { ComparisonHistory } from '@/components/ComparisonHistory/ComparisonHistory'
import { Footer } from '@/components'
import { isTextEmpty } from '@/utils/isTextEmpty'
export type SavedComparisonsType = {
  id: number
  leftText: string
  rightText: string
  format: string
  date: string
}
export default function App() {
  const [leftText, setLeftText] = useState<string>('')
  const [rightText, setRightText] = useState<string>('')
  const [format, setFormat] = useState('text')
  const [savedComparisons, setSavedComparisons] = useState<
    Array<SavedComparisonsType>
  >([])
  const [showValidation, setShowValidation] = useState<boolean>(false)
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
    setShowValidation(true)

    if (isTextEmpty(leftText) || isTextEmpty(rightText)) {
      return
    }

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
    const newComparison = {
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

  const loadComparison = (comparison: SavedComparisonsType) => {
    setLeftText(comparison.leftText)
    setRightText(comparison.rightText)
    setFormat(comparison.format)
  }

  const deleteComparison = (id: number) => {
    const updatedComparisons = savedComparisons.filter((c) => c.id !== id)
    setSavedComparisons(updatedComparisons)
    localStorage.setItem('savedComparisons', JSON.stringify(updatedComparisons))
  }

  const handleLeftTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLeftText(e.target.value)
    if (
      showValidation &&
      !isTextEmpty(e.target.value) &&
      !isTextEmpty(rightText)
    ) {
      setShowValidation(false)
    }
  }

  const handleRightTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRightText(e.target.value)
    if (
      showValidation &&
      !isTextEmpty(leftText) &&
      !isTextEmpty(e.target.value)
    ) {
      setShowValidation(false)
    }
  }
  const formatOptions = [
    { value: 'text', label: 'Plain Text' },
    { value: 'json', label: 'JSON' },
    { value: 'sql', label: 'SQL' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 pb-[footer-height]">
        <DiffViewer
          leftText={leftText}
          rightText={rightText}
          formatOptions={formatOptions}
          handleLeftTextChange={handleLeftTextChange}
          handleRightTextChange={handleRightTextChange}
          findDifferences={findDifferences}
          setFormat={setFormat}
          saveComparison={saveComparison}
          format={format}
          showValidation={showValidation}
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

      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
