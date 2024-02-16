'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { defaultHtml, htmlQuery } from './const'
import { useConfig } from '@/hooks/useConfig'
import { useSearchParams } from 'next/navigation'
import { emmetCSS, emmetHTML } from 'emmet-monaco-es'

export const HtmlCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const { editorTheme, editorLineNumbers, editorFontSize } = useConfig()
  const searchParams = useSearchParams()

  function mount (editor: any): void {
    editorMount(editor, htmlQuery, defaultHtml)
    emmetCSS((window as any).monaco)
    emmetHTML((window as any).monaco)
  }

  return (
    <div className='sectionSplit overflow-auto'>
      <Editor
        height='100%'
        width='100%'
        language='html'
        defaultLanguage='html'
        theme={editorTheme}
        onChange={value => handleQueryParams(htmlQuery, value)}
        onMount={editor => mount(editor)}
        value={atob(searchParams.get(htmlQuery) ?? '')}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          lineNumbers: editorLineNumbers,
          fontSize: editorFontSize
        }}
      />

      <FloatLang alt='HTML 5' src='html5.svg' code={defaultHtml} fn={resetEditor} query={htmlQuery} />
    </div>
  )
}
