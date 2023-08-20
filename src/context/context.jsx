import React, { useState, createContext, useEffect, useMemo, memo } from "react";
import axios from "axios";

export const WeatherContext = createContext();
const daysOfWeek = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const monthsOfYear = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
export const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("toshkent");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const cityName = city || 'City Name';
  const temp = Math.round(data?.current?.temp_c) || '00';
  //data convert to string 
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const condition_weather = data?.current?.condition?.text || '00';
  const humidity = data?.current?.humidity || '00';
  const wind_speed = data?.current?.gust_kph || '00';
  const compass = data?.current?.wind_dir || 'ma\'lumot yo\'q';
  const feeltemp = data?.current?.feelslike_c || '00';
  const dateStr = `${daysOfWeek[day]} ${now.getDate()} ${monthsOfYear[month]} `;
  const image = data?.current?.condition?.icon || '00';
  const sunrise = data?.forecast?.forecastday[0]?.astro?.sunrise || '00';
  const sunset = data?.forecast?.forecastday[0]?.astro?.sunset || '00';
  const key = "d17440e76748470b893125348231908";
  const [hidden,setHidden] = useState(true);
  const [forecastdayclone, setForecastdayclone] = useState([]);
  useEffect(() => {
    weatherApi();
  }, [city]);
  const modal = {
    hidden,
    setHidden,
  }
  const weatherData = useMemo(() => {
    return {
      cityName,
      temp,
      condition_weather,
      humidity,
      wind_speed,
      compass,
      feeltemp,
      image,
      dateStr,
      sunrise,
      sunset,
      daysOfWeek,
      monthsOfYear
    }
  })
  const weatherApi = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`
      );
      setData(error ? {} : response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ data, setCity,loading,setLoading,forecastdayclone,setForecastdayclone,modal,weatherData,error}}>
      {children}
    </WeatherContext.Provider>
  );
};
