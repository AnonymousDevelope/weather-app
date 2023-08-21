import React, { useContext, useState, useMemo } from 'react';
import { WeatherContext } from '../../context/context';
import './header.css';
import { Input } from '../../ui-components';

const Header = ({ className, logoImage }) => {
  const [city1, setCity1] = useState('');
  const { setCity, setLoading, setError } = useContext(WeatherContext);
  const handleCityChange = (e) => {
    setCity1(e.target.value);
  };

  const getWeather = async () => {
    setLoading(true);

    try {
      await setCity(city1);
      setCity1('');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getWeather();
    }
  };
  return (
    <div className={"container-fluid container-weather" + " " + className}>
      <div className="navbar-weather">
        <div className="navbar-logo">
          <div className="title">
            Weather APP
            <img src={logoImage} width={50} alt="" />
          </div>
        </div>
        <div className="navbar-search">
          <form>
            <div className="form-weather form-group">
              <Input type="text" placeholder={"Search . . ."} onKeyDown={handleKeyDown} onChange={handleCityChange} />
              <button onClick={getWeather} type="button" className="btn btn-outline-secondary border-0">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="navbar-responsive">
          <div className="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="lang-weather">
            <ul className="nav navbar-nav">
              <li className='navbat-item'><a className="nav-link" href="#">ENG</a></li>
              <li className='navbat-item'><a className="nav-link" href="#">UZB</a></li>
              <li className='navbat-item'><a className="nav-link" href="#">RUS</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
