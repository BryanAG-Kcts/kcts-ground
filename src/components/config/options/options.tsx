import { Layout } from '../layoutConfig/layout'

export const UserOptions = (): JSX.Element => {
  return (
    <section>
      <div>
        <h4 className='mb-4'>Editar layout: </h4>
        <Layout />
      </div>
    </section>
  )
}
