import React, { useContext } from 'react';
import "./weatherHourly.css";
import HourlyItem from '../weather-hourly-item/hourlyItem';
import { WeatherContext } from '../../context/context';

const WeatherHourly = () => {
  const { data, modal, forecastdayclone } = useContext(WeatherContext);

  console.log(forecastdayclone);

  const containerStyle = {
    display: modal.hidden ? "none" : "block",
    overflow: "auto",
  };

  return (
    <div className="container-fluid hourly-container position-absolute w-100 bottom-0 top-0" style={containerStyle}>
      <div onClick={() => modal.setHidden(!modal.hidden)} className="close">
        <i className="fa fa-times fa-2x"></i>
      </div>
      <div className="container-item w-75 gap-3 mx-auto row">
        {forecastdayclone?.hour ? (
          forecastdayclone.hour.map((item, index) => (
            <HourlyItem key={index} item={item} /> 
          ))
        ) : (
          <p>Loading hourly data...</p>
        )}
      </div>
    </div>
  );
}

export default WeatherHourly;
