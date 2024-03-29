import { generateIframeHTML } from './const'

interface Props {
  html64?: string
  css64?: string
  js64?: string
}

export const Playground = ({ html64 = '', css64 = '', js64 = '' }: Props): JSX.Element => {
  const html = atob(html64)
  const css = atob(css64)
  const js = atob(js64)

  const iframe = generateIframeHTML(html, css, js)

  return (
    <iframe id='iframePlayGround' className='sectionSplit iframePlayGround' srcDoc={iframe} />
  )
}
