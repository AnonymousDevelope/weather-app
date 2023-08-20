import React from 'react'
import "./hourlyItem.css"
import {WeatherContext} from '../../context/context'
const HourlyItem = ({key,item}) => {
    const {weatherData} = React.useContext(WeatherContext)
    const {daysOfWeek,monthsOfYear} = weatherData;
    const convertDate = (date) => {
        const now = new Date(date);
        const day = now.getDay();
        const month = now.getMonth();
        const hours = now.getHours();
        return `${daysOfWeek[day]} ${monthsOfYear[month]} `
        + `${hours<10?'0':''}${hours}:${now.getMinutes()<10?'0':''}${ now.getMinutes()}`
    }
    return (
        <>
            <div key={key} className="hourly-item col-3 shadow">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hourly-item-img">
                            <img src={item?.condition?.icon} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 temprature-hourly">
                        <div className="temp">
                            {Math.round(item?.temp_c)}°C
                        </div>
                        <div className="max-temp">
                            tempratuter feels {Math.round(item?.feelslike_c)}°C
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="date">
                        {convertDate(item?.time)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HourlyItem