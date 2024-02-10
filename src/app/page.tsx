import { ChangeColorEditor } from '@/components/config/changeColorEditor'
import { Download } from '@/components/config/download'
import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'
interface Props {
  searchParams: {
    html?: string
    css?: string
    js?: string
  }
}
export default function Home ({ searchParams }: Props): JSX.Element {
  return (
    <main className='flex flex-1'>
      <aside className='asideConfig'>
        <ChangeColorEditor />
        <Download html={searchParams.html} css={searchParams.css} js={searchParams.js} />
      </aside>

      <section className='grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-x-auto flex-1'>
        <SourceCode />
        <Playground css64={searchParams?.css} html64={searchParams?.html} js64={searchParams?.js} />
      </section>
    </main>
  )
}
