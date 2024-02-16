'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { HtmlCode } from './htmlCode'
import { CssCode } from './cssCode'
import { JsCode } from './jsCode'
import { EditorMount, HandleQueryParams, ResetEditor } from './types'
import { cssQuery, htmlQuery, jsQuery } from './const'

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

  const resetEditor: ResetEditor = (query, code) => {
    handleQueryParams(query, code)
  }

  const editorMount: EditorMount = (editor, query, defaultCode) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!searchParams.get(htmlQuery) && !searchParams.get(cssQuery) && !searchParams.get(jsQuery)) {
      handleQueryParams(query, defaultCode)
    }
    editor.layout()
  }

  return (
    <>
      <HtmlCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
      <CssCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
      <JsCode handleQueryParams={handleQueryParams} editorMount={editorMount} resetEditor={resetEditor} />
    </>
  )
}
