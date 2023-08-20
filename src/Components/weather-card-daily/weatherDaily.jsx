import React, { useContext, useEffect } from "react";
import "./weatherDaily.css";
import { WeatherContext } from "../../context/context";

const WeatherDaily = () => {
    const { data, weatherData,forecastdayclone,setForecastdayclone,modal} = useContext(WeatherContext);
    const { daysOfWeek, monthsOfYear } = weatherData;
    const dateConvertUzb = (weatherDate) => {
        const date = new Date(weatherDate);
        const day = date.getDay();
        const month = date.getMonth();
        return `${daysOfWeek[day]} ${date.getDate()} ${monthsOfYear[month]}`;
    }
    useEffect(() => {
        document.body.style.overflow = modal.hidden ? "auto" : "hidden"
    },[modal])
    const shareWeather = (idx) => {
        setForecastdayclone(data.forecast.forecastday[idx]);
        modal.setHidden(!modal.hidden);
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      }
    // Ensure data and forecastday are available before proceeding

    const {forecastday } = data.forecast; // Change this to the index of the day you want to display
    return (
        <div className="weather-card-daily flex-md-row gap-3 flex-column">
            {
                forecastday.map((item, index) => (
                    <div key={index} onClick={() => shareWeather(index)} className="card-item col-sm-lg-5 col-md-3 d-flex px-2">
                        <div className="row px-2">
                            <div className="icon col-6">
                                {/* Use the dynamic weather icon URL */}
                                <img src={item?.day?.condition?.icon} alt="rasm" />
                            </div>
                            <div className="col-6 temprature-daily">
                                {/* Display the average temperature */}
                                <span>{Math.round(item?.day?.avgtemp_c)}°</span>
                            </div>
                        </div>
                        <div className="date">
                            {/* Display the formatted date */}
                            <span className="day">{dateConvertUzb(item?.date)}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default WeatherDaily;
