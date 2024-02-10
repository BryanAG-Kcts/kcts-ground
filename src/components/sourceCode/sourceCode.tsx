'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { HtmlCode } from './htmlCode'
import { CssCode } from './cssCode'
import { JsCode } from './jsCode'
import { EditorMount, HandleQueryParams, ResetEditor } from './types'

export const SourceCode = (): JSX.Element => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const handleQueryParams: HandleQueryParams = (query, value = '') => {
    const decode = btoa(value)

    if (value.trim().length > 0) {
      params.set(query, decode)
    } else {
      params.delete(query)
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const resetEditor: ResetEditor = (query, code, editorRef) => {
    handleQueryParams(query, code)
    const editor = editorRef.current
    if (editor != null) {
      editor.setValue(code)
    }
  }

  const editorMount: EditorMount = (editor, query, defaultCode) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const code = atob(searchParams.get(query) ?? '') || defaultCode
    editor.setValue(code)
    handleQueryParams(query, code)
  }

  return (
    <>
      <HtmlCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
      <CssCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
      <JsCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
    </>
  )
}
