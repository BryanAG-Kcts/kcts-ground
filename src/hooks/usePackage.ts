import { create } from 'zustand'
import { IPackage } from './Ipackage'
import { jsQuery } from '@/components/sourceCode/const'
import { selectImportPackages } from '@/components/npmPackages/const'

export const usePackage = create<IPackage>((set, get) => ({
  query: jsQuery,
  setQuery (query) {
    set({ query })
  },
  selectModulePackage (pkg) {
    const { query } = get()
    const code = selectImportPackages[query](pkg)
    return code
  }
}))
