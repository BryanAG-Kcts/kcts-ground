import { create } from 'zustand'
import { Props } from './IFont'

export const useFont = create<Props>(set => ({
  fonts: [],
  setFonts: fonts => set({ fonts })
}))
