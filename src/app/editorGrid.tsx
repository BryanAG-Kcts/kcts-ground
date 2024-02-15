'use client'
import { useConfig } from '@/hooks/useConfig'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const EditorGrid = ({ children }: Props): JSX.Element => {
  const { editorGrid } = useConfig()

  return (
    <section className={`editorGrid_mobile ${editorGrid} overflow-hidden w-full h-screen`}>
      {children}
    </section>
  )
}
