import React from 'react';
import { kelvinsToCelsiusTemperature, getLastStr } from '../utils/index'

const FutureWeatherList = ({data = []}) =>{
    return (
        <div className="future-weather-info-list">
            {
                data.length > 0 && data.map((item, index) => {
                    return <div className="future-weather-info-item" key={index}>
                        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
                        <p className="min-temperature">
                            {kelvinsToCelsiusTemperature(item.main.temp_min)}°
            </p>
                        <div className="vertical-line" />
                        <p className="max-temperature">
                            {kelvinsToCelsiusTemperature(item.main.temp_max)}°
            </p>
                        <p className="date">{getLastStr(item.dt_txt)}</p>
                    </div>
                })
            }
    </div>
    )
    

}
export default FutureWeatherList;