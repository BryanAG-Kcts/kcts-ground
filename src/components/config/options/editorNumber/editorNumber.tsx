'use client'
import { useConfig } from '@/hooks/configState'
import { ChangeEvent } from 'react'
import { EditorLineNumbers, editorLineNumbersArray } from '../../const'
import style from '../options.module.css'

export const EditorNumber = (): JSX.Element => {
  const { editorLineNumbers, setEditorLineNumbers } = useConfig()

  function handleLineNumber (e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value as EditorLineNumbers
    setEditorLineNumbers(value)
  }

  return (
    <select defaultValue={editorLineNumbers} className={style.selectOptions} onChange={handleLineNumber}>
      {
        editorLineNumbersArray.map(lineNumber => <option key={lineNumber} value={lineNumber}>{lineNumber}</option>)
      }
    </select>
  )
}
