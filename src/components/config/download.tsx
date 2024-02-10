'use client'

import { ReactSVG } from 'react-svg'
import { generateIframeHTML } from '../playground/const'

interface Props {
  html?: string
  css?: string
  js?: string
}
export const Download = ({ html = '', css = '', js = '' }: Props): JSX.Element => {
  async function download (): Promise<void> {
    const htmlToCode = generateIframeHTML(atob(html), atob(css), atob(js))
    const code = btoa(htmlToCode)
    try {
      const data = await fetch(`/${code}`)
      const blob = await data.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'code.pdf'
      a.click()
    } catch (e) {
      alert('Lo lamentamos, algo')
    }
  }

  return (
    <button onClick={download}>
      <ReactSVG src='/download.svg' title='Descargar pdf' desc='Descargar pdf' />
    </button>
  )
}
