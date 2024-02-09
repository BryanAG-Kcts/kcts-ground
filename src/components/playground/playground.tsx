interface Props {
  code64?: string
}

export const Playground = ({ code64 = '' }: Props): JSX.Element => {
  const code = atob(code64)
  return (
    <iframe className='sectionSplit' srcDoc={code} />
  )
}
