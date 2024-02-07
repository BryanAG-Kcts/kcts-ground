import { create } from 'zustand'
import { Props } from './IPlayGround'
import { defaultCode } from '@/constants/config'

export const usePlayGroundState = create<Props>((set) => ({
  sourceCode: defaultCode,
  setSourceCode (sourceCode) {
    set({ sourceCode })
  }
}))
