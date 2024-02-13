'use client'
import { useRef } from 'react'
import { ReactSVG } from 'react-svg'

interface Props {
  icon: string
  title: string
}
export const AsideSliderInput = ({ icon, title }: Props): JSX.Element => {
  const inputCheckBox = useRef<HTMLInputElement>(null)

  function cleanChecks (): void {
    document.querySelectorAll('.checkAsideSlider').forEach(element => {
      const checkBox = element as HTMLInputElement
      if (checkBox !== inputCheckBox.current) {
        checkBox.checked = false
      }
    })
  }

  return (
    <>
      <label className='labelHandler'>
        <span className='transition-transform cursor-pointer block' title={title}>
          <ReactSVG src={icon} title={title} desc={title} />
        </span>
        <input ref={inputCheckBox} title={title} onChange={cleanChecks} type='checkbox' className='hidden checkAsideSlider' />
        <div onClick={cleanChecks} className='dangerZoneSlider' />
      </label>
    </>
  )
}
