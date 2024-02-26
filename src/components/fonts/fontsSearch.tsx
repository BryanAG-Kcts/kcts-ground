'use client'
import { Font } from '@/hooks/IFont'
import { useFont } from '@/hooks/useFont'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import db from 'just-debounce'
import styles from './fonts.module.css'
import { getFont } from './const'
import { useRouter, useSearchParams } from 'next/navigation'
import { cssQuery } from '../sourceCode/const'

export const FontsSearch = (): JSX.Element => {
  const { fonts } = useFont()
  const [font, setFont] = useState<string>('')
  const [searchFonts, setSearchFonts] = useState<Font[]>([])

  const handleFont = db((e: ChangeEvent<HTMLInputElement>) => {
    setFont(e.target.value)
  }, 200)

  useEffect(() => {
    const searchFonts = fonts.filter(actualFont => {
      const lowerActualFont = actualFont.family.toLowerCase()
      const lowerSearchFont = font.toLowerCase()

      return lowerActualFont.includes(lowerSearchFont)
    })

    setSearchFonts(searchFonts.slice(0, 20))
  }, [font, fonts])

  return (
    <div>
      <input className='block w-full' type='text' onChange={handleFont} />

      <section className='flex flex-col gap-4 py-3'>
        {searchFonts.length > 0 ? searchFonts.map(actualFont => <FontButton key={actualFont.family} font={actualFont} />) : <p>Cargando fuentes...</p>}
      </section>
    </div>
  )
}

interface Props {
  font: Font
}

export const FontButton = ({ font }: Props): JSX.Element => {
  const { category, family, lastModified, variants, version, subsets, files } = font
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  function addFont (e: MouseEvent<HTMLButtonElement>): void {
    const fontFace = getFont(files.regular, family)
    const actualCSS = atob(params.get(cssQuery) ?? '')

    if (actualCSS.includes(fontFace)) return
    const newCSS = `${fontFace}\n${actualCSS}`
    const newCSS64 = btoa(newCSS)
    params.set(cssQuery, newCSS64)
    replace(`/?${params.toString()}`)
  }

  return (
    <div className={styles.fontCard}>
      <h4>{family}</h4>
      <article>
        <p><span className='font-semibold'>Categoría:</span> {category}</p>
        <ul>
          <li className='font-semibold mb-1'>Variantes:</li>
          {
            variants.map(variant => <li key={variant}> - {variant}</li>)
          }
        </ul>
        <ul>
          <li className='font-semibold mb-1'>Subsets:</li>
          {
            subsets.map(subset => <li key={subset}> - {subset}</li>)
          }
        </ul>
        <p>{version} - {lastModified.toString()}</p>
      </article>
      <button onClick={addFont} className='btn'>Agregar fuente</button>
    </div>
  )
}
