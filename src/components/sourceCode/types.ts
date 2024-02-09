import { RefObject } from 'react'
import { cssQuery, htmlQuery, jsQuery } from './const'

export type PossibleQueries = typeof htmlQuery | typeof cssQuery | typeof jsQuery

export type HandleQueryParams = (query: PossibleQueries, value?: string) => void
export type EditorMount = (editor: any, query: PossibleQueries, defaultCode: string) => void
export type ResetEditor = (query: PossibleQueries, code: string, editorRef: RefObject<any>) => void

export interface EditorLangProps {
  handleQueryParams: HandleQueryParams
  editorMount: EditorMount
  resetEditor: ResetEditor
}
