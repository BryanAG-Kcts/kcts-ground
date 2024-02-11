export const layoutGridEditor = {
  editorGrid_v1: 'editorGrid_v1',
  editorGrid_v2: 'editorGrid_v2',
  editorGrid_v3: 'editorGrid_v3',
  editorGrid_v4: 'editorGrid_v4',
  editorGrid_v5: 'editorGrid_v5'
} as const

export const layoutGridEditorArray = Object.values(layoutGridEditor)
export type LayoutGridEditor = keyof typeof layoutGridEditor

export const backgrounds = {
  light: {
    value: 'vs-light',
    follow: 'dark'
  },
  dark: {
    value: 'vs-dark',
    follow: 'light'
  }
} as const

export type Background = keyof typeof backgrounds
export type Backgrounds = typeof backgrounds.dark | typeof backgrounds.light
