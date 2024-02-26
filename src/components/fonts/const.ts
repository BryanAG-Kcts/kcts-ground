export function getFont (file: string, name: string): string {
  return `@font-face {
    font-family: '${name}';
    src: url('${file}') format('truetype');
}
    `
}
