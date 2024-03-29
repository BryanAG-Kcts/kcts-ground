'use client'
import { PossibleQueries, ResetEditor } from './types'

interface Props {
  alt: string
  src: string
  fn: ResetEditor
  query: PossibleQueries
  code: string
}

export const FloatLang = ({ alt, src, fn, query, code }: Props): JSX.Element => {
  return (
    <button title='Resetear' onClick={() => fn(query, code)} className='absolute bottom-0 right-0 w-12 h-12 m-6 z-50 hover:opacity-20 transition-opacity'>
      <img src={`/${src}`} alt={alt} />
    </button>
  )
}
