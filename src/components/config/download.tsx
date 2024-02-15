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
  async function download (): Promise<void> {
    const iframe = document.createElement('iframe')
    iframe.srcdoc = htmlToCode
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    iframe.contentWindow?.print()
  }

  return (
    <button title='Descargar pdf' onClick={download}>
      <ReactSVG src='/download.svg' title='Descargar pdf' desc='Descargar pdf' />
    </button>
  )
}
