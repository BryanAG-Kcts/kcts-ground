'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { defaultJs, jsQuery } from './const'
import { useRef } from 'react'
import { useConfig } from '@/hooks/configState'

export const JsCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const editorRef = useRef<any>(null)
  const { editorTheme, editorLineNumbers } = useConfig()

  function mount (editor: any): void {
    editorRef.current = editor
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
      />

      <FloatLang alt='JavaScript' src='js.svg' code={defaultJs} editorRef={editorRef} fn={resetEditor} query={jsQuery} />
    </div>
  )
}
