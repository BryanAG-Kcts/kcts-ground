import { create } from 'zustand'
import { Props } from './IConfig'
import { backgrounds } from '@/components/config/const'

export const useConfig = create<Props>((set) => ({
  colorMode: backgrounds.dark,
  setColorMode: (colorMode) => set({ colorMode })
}))
