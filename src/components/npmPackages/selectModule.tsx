'use client'
import { usePackage } from '@/hooks/usePackage'
import { htmlQuery, jsQuery } from '../sourceCode/const'
import { ChangeEvent } from 'react'
import { SelectImportPackages } from './const'
export const SelectModule = (): JSX.Element => {
  const { query, setQuery } = usePackage()

  function handleQuery (e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value as SelectImportPackages
    setQuery(value)
  }

  return (
    <>
      <h3 className='font-semibold'>Importar dependencias como:</h3>
      <select defaultValue={query} onChange={handleQuery}>
        <option value={htmlQuery}>Etiqueta script</option>
        <option value={jsQuery}>Import modules</option>
      </select>
    </>
  )
}
