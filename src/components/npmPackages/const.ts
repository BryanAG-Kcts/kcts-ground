const blackList = {
  tailwindcss: 'https://cdn.tailwindcss.com',
  bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
} as const

const getPackageCDN = (pkg: string): string => blackList[pkg as keyof typeof blackList] ?? `https://cdn.skypack.dev/${pkg}`

const interceptInvalidCharacters = /[-@/]/

export function setScriptPackage (pkg: string): string {
  const script = /* html */`<script src="${getPackageCDN(pkg)}"></script>`
  const code = btoa(script)
  return code
}
export function setImportPackage (pkg: string): string {
  const splittedName = pkg.split(interceptInvalidCharacters)
  const isNumber = Number(splittedName[0][0])
  if (!isNaN(isNumber)) splittedName[0] = '_' + splittedName[0]
  const capitalizeName = splittedName.map(text => (text.trim().length > 0 ? text[0].toUpperCase() + text.substring(1) : '')).join('').trim()

  const script = `import ${capitalizeName} from "${getPackageCDN(pkg)}"`
  const code = btoa(script)
  return code
}
export const selectImportPackages = {
  html: setScriptPackage,
  js: setImportPackage
} as const

export type SelectImportPackages = keyof typeof selectImportPackages
