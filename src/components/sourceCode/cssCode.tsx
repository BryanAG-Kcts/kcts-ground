'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { cssQuery, defaultCss } from './const'
import { useRef } from 'react'

export const CssCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const editorRef = useRef<any>(null)

  function mount (editor: any): void {
    editorRef.current = editor
    editorMount(editor, cssQuery, defaultCss)
  }

  return (
    <div className='sectionSplit'>
      <Editor
        height='100%'
        width='100%'
        language='css'
        defaultLanguage='css'
        theme='vs-dark'
        onChange={value => handleQueryParams(cssQuery, value)}
        onMount={editor => mount(editor)}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false }
        }}
      />

      <FloatLang alt='CSS 3' src='css3.svg' code={defaultCss} editorRef={editorRef} fn={resetEditor} query={cssQuery} />
    </div>
  )
}
