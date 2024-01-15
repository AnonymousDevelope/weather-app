import React, { useState, createContext, useEffect, useMemo } from "react";
import axios from "axios";

export const WeatherContext = createContext();
const daysOfWeek = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const monthsOfYear = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
export const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  // city default value get location navigator
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Xatoni birinchi bo'lib null deb belgilash

  const cityName = city || 'City Name';
  const temp = Math.round(data?.current?.temp_c) || '00';
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
  const [hidden, setHidden] = useState(true);
  const [forecastdayclone, setForecastdayclone] = useState([]);
  const getLocation = (lon, lat) => {
    return new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lon},${lat}&days=7`);
        setCity(response.data?.location?.name);
        setData(response.data);
        setLoading(false);
        resolve(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error);
        reject(error);
      }
    });
  };
  
  useEffect(() => {
    weatherApi();
  }, [city]);

  const modal = {
    hidden,
    setHidden,
  };

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
      monthsOfYear,
    };
  }, [city, data]);

  const weatherApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`
      );
      setData(response.data);
      setLoading(false);
      setError(null); // Xato yo'q deb belgilash
    } catch (error) {
      setError(error); // Xato sodir bo'lganda xatoni o'rniga yuboramiz
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ data,getLocation, setCity,city, loading, setLoading, forecastdayclone, setForecastdayclone, modal, weatherData, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};
