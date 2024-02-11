export const layoutGridEditor = {
  editorGrid_v1: 'editorGrid_v1',
  editorGrid_v2: 'editorGrid_v2',
  editorGrid_v3: 'editorGrid_v3',
  editorGrid_v4: 'editorGrid_v4',
  editorGrid_v5: 'editorGrid_v5'
} as const

export const layoutGridEditorArray = Object.values(layoutGridEditor)
export type LayoutGridEditor = keyof typeof layoutGridEditor

export const editorThemes = {
  light: 'vs-light',
  dark: 'vs-dark'
} as const

export type EditorThemes = typeof editorThemes.dark | typeof editorThemes.light

export const editorLineNumbers = {
  on: 'on',
  off: 'off',
  interval: 'interval',
  relative: 'relative'
} as const

export type EditorLineNumbers = typeof editorLineNumbers[keyof typeof editorLineNumbers]
export const editorLineNumbersArray = Object.values(editorLineNumbers)
