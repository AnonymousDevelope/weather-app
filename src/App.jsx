import { useContext, useEffect, useState } from 'react'
import { Header, Main } from './Components'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./logo/weatherAppLogo.png"
import "./index.css"
import { WeatherContext } from './context/context'
import { Alert } from './ui-components'
function App() {
  const { data, error,setError } = useContext(WeatherContext);
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
    setError(null)
    return (
      <>
        <Header logoImage={logo} className="shadow font-monospace" />
        <Alert >
          {console.log(error)}
          Ma'lumotlaringiz topilmadi iltimos intenet bilan ulanishni tekshirib ko'ring
        </Alert>
      </>
    )
  }
  if (error?.response?.status == 400) {
    
    return (
      <>
        <Header logoImage={logo} className="shadow font-monospace" />
        <Alert >
          {console.log(error)}
          Bunday davlat majud emas
        </Alert>
      </>
    )
  }
}

export default App
