export function getFont (file: string, name: string): string {
  const url = file.replace('http', 'https')
  return `@font-face {
    font-family: '${name}';
    src: url('${url}') format('truetype');
}
    `
}
