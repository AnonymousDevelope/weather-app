import { useState } from 'react'
import {Header, Main} from './Components'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./logo/weatherAppLogo.png"
function App() {
  return (
    <>
      {/* Header */}
      <Header logoImage={logo}  className="shadow font-monospace"/>
      {/* Main */}
      <Main />
      {/* Footer */}
    </>
  )
}

export default App
