'use client'

import { ReactSVG } from 'react-svg'
import { generateIframeHTML } from '../playground/const'

interface Props {
  html?: string
  css?: string
  js?: string
}
export const Download = ({ html = '', css = '', js = '' }: Props): JSX.Element => {
  const htmlToCode = generateIframeHTML(atob(html), atob(css), atob(js))
  const code = btoa(htmlToCode)

  return (
    <a href={`/${code}`} download>
      <ReactSVG src='/download.svg' title='Descargar pdf' desc='Descargar pdf' />
    </a>
  )
}
