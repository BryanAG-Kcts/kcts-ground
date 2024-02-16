'use client'
import { useConfig } from '@/hooks/useConfig'
import { LayoutGridEditor, layoutGridEditorArray } from '../../const'

export const Layout = (): JSX.Element => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-4'>
      {
        layoutGridEditorArray.map(layout => <MiniLayout key={layout} classLayout={layout} />)
      }
    </div>
  )
}

interface MiniProps {
  classLayout: LayoutGridEditor
}

export const MiniLayout = ({ classLayout }: MiniProps): JSX.Element => {
  const { setEditorGrid, editorGrid } = useConfig()
  const isActiveLayout = classLayout === editorGrid ? 'grayscale-0' : ''
  function handleSelectLayout (): void {
    setEditorGrid(classLayout)
  }

  return (
    <button onClick={handleSelectLayout} className={`aspect-square grayscale flex-1 ${classLayout} ${isActiveLayout} rounded overflow-hidden transition-transform hover:scale-95 hover:grayscale-0`}>
      <span className='bg-orange-500 sectionSplit' />
      <span className='bg-blue-500 sectionSplit' />
      <span className='bg-amber-400 sectionSplit' />
      <span className='bg-white iframePlayGround sectionSplit' />
    </button>
  )
}
