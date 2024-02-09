'use client'
import { defaultCode } from '@/constants/config'
import { useConfig } from '@/hooks/configState'
import { Editor } from '@monaco-editor/react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useRef } from 'react'

export const SourceCode = (): JSX.Element => {
  const { colorMode } = useConfig()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  const editorRef = useRef<any>(null)

  const handleQueryParams = (query: string): void => {
    const params = new URLSearchParams(searchParams)

    const query64 = btoa(query)

    if (query.trim().length > 0) {
      params.set('code', query64)
    } else {
      params.delete('code')
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const reset = (code: string): void => {
    handleQueryParams(defaultCode)
    const editor = editorRef.current
    if (editor != null) {
      editor.setValue(code)
    }
  }

  const editorMount = (editor: any): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const code = atob(searchParams.get('code') ?? '') || defaultCode
    editorRef.current = editor
    editor.setValue(code)
    handleQueryParams(code)
  }

  return (
    <div className='sectionSplit relative bg-red-400 overflow-hidden'>
      <Editor
        height='100%'
        width='100%'
        defaultLanguage='html'
        defaultValue={searchParams.get('code') ?? ''}
        onChange={value => handleQueryParams(value ?? '')}
        theme={colorMode.value}
        onMount={editorMount}
        options={
         { minimap: { enabled: false } }
        }
      />
      <button onClick={() => reset(defaultCode)} className={`absolute top-0 right-0 z-20 mx-6 my-2 ${colorMode.value}`}>Resetear</button>
    </div>
  )
}
