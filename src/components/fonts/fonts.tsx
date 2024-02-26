import { FontsSearch } from './fontsSearch'

export const Fonts = (): JSX.Element => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-lg font-semibold'>Agrega fuentes desde Google Fonts</h2>
      <p>Busca tu fuente favorita y agrégala a tu proyecto. Se añadirán todas las posibles variantes disponibles</p>

      <FontsSearch />
    </section>
  )
}
