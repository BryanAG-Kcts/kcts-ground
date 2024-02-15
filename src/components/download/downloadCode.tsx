'use client'
import { downloadZip } from 'client-zip'
import { getHtml } from './const'

interface Props {
  html64?: string
  css64?: string
  js64?: string
}
export const DownloadCode = ({ html64 = '', css64 = '', js64 = '' }: Props): JSX.Element => {
  async function getZip (): Promise<void> {
    const intro = [
      {
        name: 'index.js',
        input: atob(js64)
      },
      {
        name: 'index.html',
        input: getHtml(html64)
      },
      {
        name: 'styles.css',
        input: atob(css64)
      }
    ]

    const zip = await downloadZip(intro).blob()
    const url = URL.createObjectURL(zip)
    const a = document.createElement('a')
    a.href = url
    a.download = 'code.zip'
    a.click()
    URL.revokeObjectURL(url)
    a.remove()
  }

  return (
    <button onClick={getZip} className='btn'>Descargar zip de código</button>
  )
}
