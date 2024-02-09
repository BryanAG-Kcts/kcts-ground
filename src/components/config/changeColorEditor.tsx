'use client'
import { useConfig } from '@/hooks/configState'
import { backgrounds } from './const'

export const ChangeColorEditor = (): JSX.Element => {
  const { setColorMode, colorMode } = useConfig()

  function handleColor (): void {
    const newColor = backgrounds[colorMode.follow]
    setColorMode(newColor)
  }
  return (
    <button onClick={handleColor}>Darkmode</button>
  )
}
