import { DownloadCode } from './downloadCode'
import { DownloadPDF } from './downloadPDF'

interface Props {
  html64?: string
  css64?: string
  js64?: string
}
export const Download = ({ html64 = '', css64 = '', js64 = '' }: Props): JSX.Element => {
  return (
    <section className='flex flex-col gap-4'>
      <h2>Zona de descargas</h2>
      <p>Puedes descargar tu código en varios formatos y conversiones</p>
      <DownloadPDF />
      <DownloadCode css64={css64} html64={html64} js64={js64} />
    </section>
  )
}
