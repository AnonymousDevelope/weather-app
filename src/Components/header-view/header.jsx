import React, { useContext, useState, useMemo } from 'react';
import { WeatherContext } from '../../context/context';
import './header.css';
import { Input } from '../../ui-components';

function Header({ className, logoImage }) {
  const [city1, setCity1] = useState('');
  const {setCity,loading,error,setLoading} = useContext(WeatherContext);

  const handleCityChange = (e) => {
    setCity1(e.target.value);
  };

  const getWeather = async (e) => {
    e.preventDefault();
    if(error){
      setLoading(false);
      return; 
    }else{
      setLoading(true);
      await setCity(city1);
    }
    // Now you can perform further actions like making an API call with the updated city
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
        <div className="navbar-menu">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-search">
          <form>
            <div className="form-weather form-group">
              <Input type="text" placeholder={"Search . . ."} onChange={handleCityChange} />
              <button onClick={getWeather} type="button" className="btn btn-outline-secondary border-0">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
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
  );
}

export default Header;
