export const backgrounds = {
  light: {
    value: 'vs-light',
    follow: 'dark'
  },
  dark: {
    value: 'vs-dark',
    follow: 'light'
  }
} as const

export type Background = keyof typeof backgrounds
export type Backgrounds = typeof backgrounds.dark | typeof backgrounds.light
