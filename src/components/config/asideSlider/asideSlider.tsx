'use client'
import { MouseEvent, ReactNode, useRef } from 'react'
import { ReactSVG } from 'react-svg'
import './asideSlider.css'

interface Props {
  icon: string
  children: ReactNode
  title: string
}

export const AsideSlider = ({ icon, title, children }: Props): JSX.Element => {
  const section = useRef<HTMLDivElement>(null)

  function toggleSlider (e: MouseEvent<HTMLElement>): void {
    const slider = section.current
    slider?.classList.remove('hiddenAsideSlider')
    slider?.classList.toggle('showAsideSlider')
    slider?.classList.toggle('animateHiddenAsideSlider')
    e.currentTarget.classList.toggle('rotate-180')
  }

  return (
    <>
      <button className='transition-transform' onClick={toggleSlider}>
        <ReactSVG src={icon} title={title} desc={title} />
      </button>
      <section className='asideSlider hiddenAsideSlider animateHiddenAsideSlider' ref={section}>
        {children}
      </section>
    </>
  )
}
