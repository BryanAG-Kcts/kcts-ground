interface Props {
  html64?: string
  css64?: string
  js64?: string
}

export const Playground = ({ html64 = '', css64 = '', js64 = '' }: Props): JSX.Element => {
  const html = atob(html64)
  const css = atob(css64)
  const js = atob(js64)

  const iframe = /* html */`
    <html>
    
      <head>
        <style>
          ${css}
        </style>
      </head>

      <body>

        ${html}

        <script>
          ${js}
        </script>
      </body>

    </html>
  `

  return (
    <div className='sectionSplit'>
      <iframe className='sectionSplit' srcDoc={iframe} />
    </div>
  )
}
