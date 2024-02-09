interface Props {
  code?: string
}
export const Download = ({ code = '' }: Props): JSX.Element => {
  return (
    <a href={`/${code}`} download>Download</a>
  )
}
