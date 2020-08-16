import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body, #root {
    min-height: 100%;
    font-family: 'DM Sans', sans-serif;
  }

  #root {
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #434655;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #434655;
    -webkit-box-shadow: inset 0 0 6px #434655;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
  	background: rgba(255,0,0,0.4);
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #15161B;
    color: #FFF;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`

export default GlobalStyle
