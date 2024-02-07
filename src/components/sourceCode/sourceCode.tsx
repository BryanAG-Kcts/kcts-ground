'use client'
import { defaultCode } from '@/constants/config'
import { usePlayGroundState } from '@/hooks/usePlayGround'

export const SourceCode = (): JSX.Element => {
  const { setSourceCode } = usePlayGroundState()
  return (
    <textarea
      className='sectionSplit bg-dark-editor text-white p-2 resize-none'
      defaultValue={defaultCode}
      onChange={(e) => setSourceCode(e.target.value)}
    />
  )
}
