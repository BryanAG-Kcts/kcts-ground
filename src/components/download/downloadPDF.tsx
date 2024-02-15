'use client'
export const DownloadPDF = (): JSX.Element => {
  function getPDF (): void {
    const iframe = document.getElementById('iframePlayGround') as HTMLIFrameElement
    iframe.contentWindow?.print()
  }

  return (
    <button className='btn' onClick={getPDF}>Descargar o imprimir PDF</button>
  )
}
