import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'

export default function Home (): JSX.Element {
  return (
    <main className='flex flex-wrap h-screen'>
      <SourceCode />
      <Playground />
    </main>
  )
}
