import React, { memo, useContext } from 'react';
import { WeatherContext } from '../../context/context'; // Make sure to import the Context correctly
import './main.css';
import  {WeatherDaily,WeatherHourly} from '../index';
import "bootstrap-icons/font/bootstrap-icons.css"
function Main() {
  const {data,loading,error,weatherData} = useContext(WeatherContext);
  // Replace placeholders with actual data
  const cityName =weatherData.cityName
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error...</div>
  }
  return (
    <>
    <div className="weather-card shadow  border mt-5 mx-auto">
      <div className="row w-100">
        <div className="title text-center p-2">
          <span className='text-light font-monospace title fs-2 text-capitalize'>Weather of {cityName}</span>
        </div>
      </div>
      <div className="row">
        <div className="data">
          <div className="row cn_temp flex-row m-1">
            <div className="col-md-4">
              <div className="current_city">
                <div className="current_city_name">
                  <span className="icon">
                    <i className='fa fa-map-marker-alt fs-4'></i>
                  </span>
                  <span className="name">
                    {cityName}
                  </span>
                </div>
                <div className="current_city_date">
                  <span className="icon">
                    <i className='fa fa-calendar-alt fs-4'></i>
                  </span>
                  <span className="name fs-5">
                    {weatherData.dateStr}
                  </span>
                </div>
                <div className="current_city_temp">
                  <div className="icon">
                    <i className="fas fa-thermometer-half"></i>
                  </div>
                  <div className="name current_temp">
                    {weatherData.temp}°
                    <div className="feel_temp">
                      Feel temp {Math.round(weatherData.feeltemp)}°
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 default_weather_image">
              <img width={120} height={120} src={weatherData.image} alt="weather image" />
              <div className="default_weather_text">
                {weatherData.condition_weather}
              </div>
            </div>
            <div className="col-md-4">
              <div className="full_data">
                <ul className="list-group">
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi  bi-sunrise"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">Sunrise {weatherData?.sunrise}</div>
                  </li>
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi fs-4 text-white bi-sunset"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">Sunset {weatherData?.sunset}</div>
                  </li>
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi fs-4 text-white bi-droplet"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">{weatherData.humidity}%</div>
                  </li>
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi fs-4 text-white bi-wind"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">{weatherData.wind_speed} km/h</div>
                  </li>
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi fs-4 text-white bi-compass"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">{weatherData.compass=="N" ?"North":
                    weatherData.compass=="S" ?
                    "South":weatherData.compass=="E" ?
                    "East":weatherData.compass=="W" ?
                    "West":weatherData.compass =="NE" ?
                    "North East":weatherData.compass =="NW"?
                    "North West":weatherData.compass =="SE"?
                    "Southeast":weatherData.compass =="SW"?
                    "South West":weatherData.compass} </div>
                  </li>
                  <li className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 icon"><i className="bi fs-4 text-white bi-arrow-up"></i></div>
                    <div className="col-md-10 col-sm-10 col-lg-10 text">1023.0 mb</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <WeatherDaily />
      <WeatherHourly />
    </>
  );
}

export default memo(Main);
