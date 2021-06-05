import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // Remove the blue highlight everytime we click on something on mobile
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    ul {
        list-style: none;
    }

    input, textarea, button, select {
        font-family: ${({ theme }) => theme.fontFamily};
        border: none;
        outline: none;
    }

    ::placeholder {
        color: ${({ theme }) => theme.text};
        font-weight: ${({ theme }) => theme.fontLight};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${({ theme }) => theme.text};
        font-weight: ${({ theme }) => theme.fontLight};
    }

    ::-ms-input-placeholder {
        color: ${({ theme }) => theme.text};
        font-weight: ${({ theme }) => theme.fontLight};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`
