'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { defaultJs, jsQuery } from './const'
import { useConfig } from '@/hooks/useConfig'
import { useSearchParams } from 'next/navigation'

export const JsCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const { editorTheme, editorLineNumbers } = useConfig()
  const searchParams = useSearchParams()

  function mount (editor: any): void {
    editorMount(editor, jsQuery, defaultJs)
  }

  return (
    <div className='sectionSplit overflow-auto'>
      <Editor
        height='100%'
        width='100%'
        language='javascript'
        defaultLanguage='javascript'
        theme={editorTheme}
        onChange={value => handleQueryParams(jsQuery, value)}
        onMount={editor => mount(editor)}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          lineNumbers: editorLineNumbers
        }}
        value={atob(searchParams.get(jsQuery) ?? '')}
      />

      <FloatLang alt='JavaScript' src='js.svg' code={defaultJs} fn={resetEditor} query={jsQuery} />
    </div>
  )
}
