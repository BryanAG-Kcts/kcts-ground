'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { cssQuery, defaultCss } from './const'
import { useConfig } from '@/hooks/useConfig'
import { useSearchParams } from 'next/navigation'

export const CssCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const { editorTheme, editorLineNumbers } = useConfig()
  const searchParams = useSearchParams()

  function mount (editor: any): void {
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
        value={atob(searchParams.get(cssQuery) ?? '')}
      />

      <FloatLang alt='CSS 3' src='css3.svg' code={defaultCss} fn={resetEditor} query={cssQuery} />
    </div>
  )
}
