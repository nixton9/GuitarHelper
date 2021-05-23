import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    spacingXXS: string
    spacingXS: string
    spacingS: string
    spacingM: string
    spacingL: string
    spacingXL: string
    fontFamily: string
    fontLight: number
    fontRegular: number
    fontMedium: number
    fontBold: number
    fontBlack: number
    smallBorderRadius: string
    mainBorderRadius: string
    text: string
    textSecondary: string
    background: string
    lightBackground: string
    surfaces: string
    accent: string
    lightAccent: string
  }
}

export const theme: DefaultTheme = {
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  spacingXL: '12rem',
  fontFamily: '"Noto Sans JP", sans-serif',
  fontLight: 300,
  fontRegular: 400,
  fontMedium: 500,
  fontBold: 700,
  fontBlack: 900,
  smallBorderRadius: '10px',
  mainBorderRadius: '20px',
  text: '#fff',
  textSecondary: '#DEDEDE',
  background: '#1D1D1D',
  lightBackground: '#555555',
  surfaces: '#121212',
  accent: '#5B1AD5',
  lightAccent: '#B89CEF'
}
