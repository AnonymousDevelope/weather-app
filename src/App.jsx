import { useContext, useEffect, useState } from 'react'
import { Header, Main } from './Components'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./logo/weatherAppLogo.png"
import "./index.css"
import { WeatherContext } from './context/context'
import { Alert } from './ui-components'
const App=()=> {
  const { data, error } = useContext(WeatherContext);
  if (data && !error) {
    return (
      <>
        {/* Header */}
        <Header logoImage={logo} className="shadow font-monospace" />
        {/* Main */}

        <Main />
        {/* Footer */}
      </>
    )
  }
  if (error.message == "Network Error") {
    return (
      <>
        <Header logoImage={logo} className="shadow font-monospace" />
        <Alert >
          Ma'lumotlaringiz topilmadi iltimos intenet bilan ulanishni tekshirib ko'ring
        </Alert>
      </> 
    )
  }
}

export default App
