import { SearchPackages } from './searchPackages'

export const NpmPackages = (): JSX.Element => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-semibold text-lg'>Añade dependencias a tu proyecto</h2>
      <p>No todas las dependencias pueden ser compatibles con tu proyecto, o tal vez necesiten de dependencias externas. </p>
      <p>Prueba a añadirlas con la etiqueta <code>script</code> de html en lugar de usar <code>import modules</code>.</p>

      <SearchPackages />
    </section>
  )
}
