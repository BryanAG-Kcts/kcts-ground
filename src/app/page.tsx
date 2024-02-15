import { AsideSlider } from '@/components/config/asideSlider/asideSlider'
import { UserOptions } from '@/components/config/options/options'
import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'
import { EditorGrid } from './editorGrid'
import { Suspense } from 'react'
import { NpmPackages } from '@/components/npmPackages/npmPackages'
import { CopyUrl } from '@/components/copyUrl/copyUrl'
import { Download } from '@/components/download/download'
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
        <div>
          <CopyUrl />
          <AsideSlider icon='/npm.svg' title='Busca paquetes NPM'>
            <NpmPackages />
          </AsideSlider>
          <AsideSlider icon='/download.svg' title='Descargar'>
            <Download css64={searchParams?.css} html64={searchParams?.html} js64={searchParams?.js} />
          </AsideSlider>
        </div>
        <div>
          <AsideSlider icon='/settings.svg' title='Configuración'>
            <UserOptions />
          </AsideSlider>
        </div>
      </aside>

      <Suspense>
        <EditorGrid>
          <SourceCode />
          <Playground css64={searchParams?.css} html64={searchParams?.html} js64={searchParams?.js} />
        </EditorGrid>
      </Suspense>
    </main>
  )
}
