'use client'
import { ChangeEvent } from 'react'
import { EditorThemes, editorThemes } from '../../const'
import { useConfig } from '@/hooks/useConfig'

export const EditorTheme = (): JSX.Element => {
  const { editorTheme, setEditorTheme } = useConfig()

  function handleTheme (e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value as EditorThemes
    document.body.className = value
    document.body.classList.remove(editorTheme)
    setEditorTheme(value)
  }

  return (
    <select defaultValue={editorTheme} onChange={handleTheme}>
      <option value={editorThemes.light}>Modo claro</option>
      <option value={editorThemes.dark}>Modo oscuro</option>
    </select>
  )
}
