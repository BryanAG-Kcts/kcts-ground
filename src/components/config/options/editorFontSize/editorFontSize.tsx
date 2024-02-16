'use client'

import { useConfig } from '@/hooks/useConfig'
import { ChangeEvent } from 'react'

export const EditorFontSize = (): JSX.Element => {
  const { setEditorFontSize } = useConfig()
  function handleFontSize (e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    const fontSize = Number(value) ?? 14
    setEditorFontSize(fontSize)
  }

  return (
    <input type='number' defaultValue='14' onChange={handleFontSize} />
  )
}
