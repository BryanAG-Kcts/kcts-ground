import { AsideSlider } from '@/components/config/asideSlider/asideSlider'
import { ChangeColorEditor } from '@/components/config/changeColorEditor'
import { Download } from '@/components/config/download'
import { UserOptions } from '@/components/config/options/options'
import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'
import { EditorGrid } from './editorGrid'
interface Props {
  searchParams: {
    html?: string
    css?: string
    js?: string
  }
}
export default function Home ({ searchParams }: Props): JSX.Element {
  return (
    <main className='h-full flex'>
      <aside className='asideConfig'>
        <ChangeColorEditor />
        <Download html={searchParams.html} css={searchParams.css} js={searchParams.js} />
        <AsideSlider icon='/settings.svg' title='wasa'>
          <UserOptions />
        </AsideSlider>
      </aside>

      <EditorGrid>
        <SourceCode />
        <Playground css64={searchParams?.css} html64={searchParams?.html} js64={searchParams?.js} />
      </EditorGrid>
    </main>
  )
}
