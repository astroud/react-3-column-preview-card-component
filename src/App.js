import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from './app.elements'
import Cards from './components/Cards/Cards.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    /* CSS variables can go here */
  }

  body{
    background: #F2F2F2;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Cards />
      </StyledWrapper>
    </>
  )
}

export default App
