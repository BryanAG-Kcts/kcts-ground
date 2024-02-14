'use client'
import { ChangeEvent, useState } from 'react'
import { ListPackages } from './listPackages'
import db from 'just-debounce'

export const SearchPackages = (): JSX.Element => {
  const [searchPkg, setSearchPkg] = useState<string>('')

  const handleSearch = db((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchPkg(e.target.value)
  }, 300)

  return (
    <>
      <input onChange={handleSearch} type='text' />
      {searchPkg.trim().length > 0 && <ListPackages searchPkg={searchPkg} />}
    </>
  )
}
