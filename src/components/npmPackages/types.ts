export interface PackageObject {
  package: Package
}

export interface Package {
  name: string
  scope: string
  version: string
  description: string
  date: Date
  links: Links
  publisher: Publisher
  maintainers: Publisher[]
}

export interface Links {
  npm: string
  homepage: string
  repository: string
  bugs: string
}

export interface Publisher {
  username: string
  email: string
}
