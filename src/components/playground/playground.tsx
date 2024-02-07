'use client'
import { usePlayGroundState } from '@/hooks/usePlayGround'

export const Playground = (): JSX.Element => {
  const { sourceCode } = usePlayGroundState()
  return (
    <iframe className='sectionSplit' srcDoc={sourceCode} />
  )
}
