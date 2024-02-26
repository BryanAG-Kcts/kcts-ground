export interface Props {
  fonts: Font[]
  setFonts: (fonts: Font[]) => void
}

export interface rawFetch {
  kind: string
  items: Font[]
}

export interface Font {
  family: string
  variants: string[]
  subsets: string[]
  version: string
  lastModified: Date
  files: Files
  category: Category
  menu: string
}

export enum Category {
  Display = 'display',
  Handwriting = 'handwriting',
  Monospace = 'monospace',
  SansSerif = 'sans-serif',
  Serif = 'serif',
}

export interface Files {
  regular: string
  italic?: string
  '500'?: string
  '600'?: string
  '700'?: string
  '800'?: string
  '100'?: string
  '200'?: string
  '300'?: string
  '900'?: string
  '100italic'?: string
  '200italic'?: string
  '300italic'?: string
  '500italic'?: string
  '600italic'?: string
  '700italic'?: string
  '800italic'?: string
  '900italic'?: string
}
