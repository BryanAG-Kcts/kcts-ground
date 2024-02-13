import { ReactNode } from 'react'
import './asideSlider.css'
import { AsideSliderInput } from './asideSliderInput'

interface Props {
  icon: string
  children: ReactNode
  title: string
}

export const AsideSlider = ({ icon, title, children }: Props): JSX.Element => {
  return (
    <>
      <AsideSliderInput icon={icon} title={title} />
      <section className='asideSlider'>
        {children}
      </section>
    </>
  )
}
