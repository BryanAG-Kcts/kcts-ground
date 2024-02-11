'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { cssQuery, defaultCss } from './const'
import { useRef } from 'react'
import { useConfig } from '@/hooks/configState'

export const CssCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const editorRef = useRef<any>(null)
  const { editorTheme, editorLineNumbers } = useConfig()

  function mount (editor: any): void {
    editorRef.current = editor
    editorMount(editor, cssQuery, defaultCss)
  }

  return (
    <div className='sectionSplit overflow-auto'>
      <Editor
        height='100%'
        width='100%'
        language='css'
        defaultLanguage='css'
        theme={editorTheme}
        onChange={value => handleQueryParams(cssQuery, value)}
        onMount={editor => mount(editor)}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          lineNumbers: editorLineNumbers
        }}
      />

      <FloatLang alt='CSS 3' src='css3.svg' code={defaultCss} editorRef={editorRef} fn={resetEditor} query={cssQuery} />
    </div>
  )
}
