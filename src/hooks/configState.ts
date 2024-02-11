import { create } from 'zustand'
import { Props } from './IConfig'
import { backgrounds, layoutGridEditor } from '@/components/config/const'

export const useConfig = create<Props>((set) => ({
  editorGrid: layoutGridEditor.editorGrid_v1,
  setEditorGrid: (editorGrid) => set({ editorGrid }),
  colorMode: backgrounds.dark,
  setColorMode: (colorMode) => set({ colorMode })
}))
