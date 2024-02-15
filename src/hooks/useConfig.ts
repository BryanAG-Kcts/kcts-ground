import { create } from 'zustand'
import { Props } from './IConfig'
import { editorLineNumbers, editorThemes, layoutGridEditor } from '@/components/config/const'

export const useConfig = create<Props>((set) => ({
  editorGrid: layoutGridEditor.editorGrid_v1,
  setEditorGrid: (editorGrid) => set({ editorGrid }),
  editorTheme: editorThemes.dark,
  setEditorTheme: (editorTheme) => set({ editorTheme }),
  editorLineNumbers: editorLineNumbers.on,
  setEditorLineNumbers: (editorLineNumbers) => set({ editorLineNumbers })
}))
