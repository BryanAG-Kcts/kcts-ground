'use client'
interface Props {
  code?: string
}
export const Download = ({ code = '' }: Props): JSX.Element => {
  async function download (): Promise<void> {
    try {
      const data = await fetch(`/${code}`)
      const blob = await data.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'code.pdf'
      a.click()
    } catch (e) {
      alert('Lo lamentamos, algo')
    }
  }

  return (
    <button onClick={download}>Download</button>
  )
}
