import { useContext, useEffect, useState } from 'react';
import { Header, Main } from './Components';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo/weatherAppLogo.png";
import "./index.css";
import { WeatherContext } from './context/context';
import { Alert } from './ui-components';

const App = () => {
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
    );
  }

  if (error?.message === "Network Error") {
    return (
      <>
        <Header logoImage={logo} className="shadow font-monospace" />
        <Alert>
          Ma'lumotlaringiz topilmadi iltimos internet bilan ulanishni tekshirib ko'ring
        </Alert>
      </> 
    );
  }

  if (error?.response?.status === 400) {
    return (
      <>
        <Header logoImage={logo} className="shadow font-monospace" />
        <Alert>
          Bunday davlat mavjud emas iltimos qaytadan urinib ko'ring
        </Alert>
      </> 
    );
  }

  // Add a default return or null if none of the conditions are met
  return null;
};

export default App;
