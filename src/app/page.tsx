
import { Playground } from '@/components/playground/playground'
import { SourceCode } from '@/components/sourceCode/sourceCode'
interface Props {
  searchParams: {
    code?: string
  }
}
export default function Home ({ searchParams }: Props): JSX.Element {
  return (
    <main className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 h-screen'>
      <SourceCode />
      <Playground code={searchParams?.code} />
    </main>
  )
}
