'use client'
import { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { generateIframeHTML } from '../playground/const'
interface Props {
  html64?: string
  css64?: string
  js64?: string
}
export const Preview = ({ html64 = '', css64 = '', js64 = '' }: Props): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const previewWindow = useRef<any>(null)

  useEffect(() => {
    if (previewUrl.trim().length > 0) {
      URL.revokeObjectURL(previewUrl)
    }

    const html = generateIframeHTML(atob(html64), atob(css64), atob(js64))
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    setPreviewUrl(url)

    if ((previewWindow.current?.deref()) != null) {
      previewWindow.current.deref().location = url
    }
  }, [html64, css64, js64])

  function showPreview (): void {
    const createWindow = window.open(previewUrl, '_blank')
    previewWindow.current = new window.WeakRef(createWindow as Window)
  }

  return (
    <button onClick={showPreview} className='asideIcon' title='Ver Live Preview'>
      <ReactSVG src='/table-share.svg' title='Ver Live Preview' desc='Ver Live Preview' />
    </button>
  )
}
