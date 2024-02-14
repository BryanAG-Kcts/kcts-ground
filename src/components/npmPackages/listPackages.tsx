'use client'

import { useEffect, useState } from 'react'
import { Package, PackageObject } from './types'

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
      <p>¡ Se han encontrado {packages.length} paquetes !</p>
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

  return (
    <div>{pkg.name} {isExactMatch}</div>
  )
}
