'use client'
import { defaultCode } from '@/constants/config'
import { Editor } from '@monaco-editor/react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export const SourceCode = (): JSX.Element => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  const editorRef = useRef<any>(null)

  const handleQueryParams = (query: string): void => {
    const params = new URLSearchParams(searchParams)

    if (query.trim().length > 0) {
      params.set('code', query)
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
    editorRef.current = editor
  }

  useEffect(() => {
    handleQueryParams(searchParams.get('code') ?? defaultCode)
  }, [])

  return (
    <div className='sectionSplit relative bg-red-400 overflow-hidden'>
      <Editor
        height='100%'
        width='100%'
        defaultLanguage='html'
        defaultValue={searchParams.get('code') ?? ''}
        onChange={value => handleQueryParams(value ?? '')}
        theme='vs-dark'
        onMount={editorMount}
        options={
         { minimap: { enabled: false } }
        }
      />
      <button onClick={() => reset(defaultCode)} className='absolute top-0 right-0 z-20 text-white mx-6 my-2'>Resetear</button>
    </div>
  )
}
