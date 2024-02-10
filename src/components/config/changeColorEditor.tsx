'use client'
import { useConfig } from '@/hooks/configState'
import { backgrounds } from './const'
import { ReactSVG } from 'react-svg'

export const ChangeColorEditor = (): JSX.Element => {
  const { setColorMode, colorMode } = useConfig()

  function handleColor (): void {
    const newColor = backgrounds[colorMode.follow]
    document.body.classList.remove(colorMode.value)
    document.body.classList.add(newColor.value)
    setColorMode(newColor)
  }

  return (
    <button onClick={handleColor}>
      <ReactSVG src='/brush.svg' title='Cambiar tema' desc='Cambiar tema' />
    </button>
  )
}
