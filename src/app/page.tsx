
import { ChangeColorEditor } from '@/components/config/changeColorEditor'
import { Download } from '@/components/config/download'
import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'
interface Props {
  searchParams: {
    code?: string
  }
}
export default function Home ({ searchParams }: Props): JSX.Element {
  return (
    <main className='h-screen flex flex-col'>
      <section className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 flex-1'>
        <SourceCode />
        <Playground code64={searchParams?.code} />
      </section>
      <footer className='bg-neutral-800 text-white flex justify-center gap-5 min-h-11 p-3'>
        <ChangeColorEditor />
        <Download code={searchParams?.code} />
      </footer>
    </main>
  )
}
