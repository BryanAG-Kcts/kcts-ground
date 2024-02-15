import { SelectImportPackages } from '@/components/npmPackages/const'

export interface IPackage {
  query: SelectImportPackages
  setQuery: (query: SelectImportPackages) => void
  selectModulePackage: (pkg: string) => string
}
