'use client'
import { ReactSVG } from 'react-svg'

export const CopyUrl = (): JSX.Element => {
  async function getUrl (): Promise<void> {
    const loc = window.location.href
    try {
      await navigator.clipboard.writeText(loc)
      alert('¡URL copiada!')
    } catch (err) {
      alert('Error al copiar la URL')
    }
  }

  return (
    <button className='asideIcon' onClick={getUrl} title='Copiar URL'>
      <ReactSVG src='/copy.svg' title='Copiar URL' desc='Copiar URL' />
    </button>
  )
}
