import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Installation from './pages/Installation'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import styled from 'styled-components'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
`

export default App
