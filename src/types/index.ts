export type Comparison = {
  id: number
  leftText: string
  rightText: string
  format: FormatType
  date: string
}

export type FormatType = 'text' | 'json' | 'sql'

export type DiffHighlight = {
  left: number[]
  right: number[]
}
