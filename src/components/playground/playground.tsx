interface Props {
  code?: string
}

export const Playground = ({ code = '' }: Props): JSX.Element => {
  return (
    <iframe className='sectionSplit' id='wa' srcDoc={code} />
  )
}
