'use client'
import { useEffect, useState } from 'react'
import { Package, PackageObject } from './types'
import style from './npmPackAges.module.css'
import { usePackage } from '@/hooks/usePackage'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface Props {
  searchPkg: string
}
export function ListPackages ({ searchPkg }: Props): JSX.Element {
  const [packages, setPackages] = useState<PackageObject[]>([])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(`https://registry.npmjs.org/-/v1/search?text=${searchPkg}`).then(async res => await res.json()).then(res => setPackages(res.objects)).catch(() => setPackages([]))
  }, [searchPkg])

  if (packages.length === 0) return <></>

  return (
    <section className='flex flex-col gap-4 break-all'>
      <p>¡ Se muestran {packages.length} paquetes !</p>
      {
        packages.map(pkg => <NpmPackage key={pkg.package.name} pkg={pkg.package} match={searchPkg} />)
      }
    </section>
  )
}

interface PropNpmPackage {
  pkg: Package
  match: string
}

export const NpmPackage = ({ pkg, match }: PropNpmPackage): JSX.Element => {
  const isExactMatch = pkg.name.toLowerCase() === match.toLowerCase() ? '(Búsqueda exacta)' : ''
  const { selectModulePackage, query } = usePackage()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { replace } = useRouter()
  const pathName = usePathname()

  function addDependency (): void {
    const code = selectModulePackage(pkg.name)
    const actualValue = searchParams.get(query) ?? ''
    const decode = atob(code)
    const actualValueDecode = atob(actualValue)

    if (actualValueDecode.includes(decode)) return
    const newQueryValue = btoa(`${decode}\n${actualValueDecode}`)

    params.set(query, newQueryValue)
    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className={style.npmPackage}>
      <h4>{pkg.name} {isExactMatch}</h4>
      <p>{pkg.description}</p>
      <a className='underline' target='_blank' rel='noreferrer' href={pkg.links.repository}>Ver repositorio</a>
      <a className='underline' target='_blank' rel='noreferrer' href={pkg.links.repository}>Ver más información</a>

      <button className='btn' onClick={addDependency}>Agregar</button>

      <p>Versión: {pkg.version}</p>
    </div>
  )
}
