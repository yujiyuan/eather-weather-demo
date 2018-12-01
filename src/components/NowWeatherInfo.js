import React from 'react';
import { kelvinsToCelsiusTemperature } from '../utils/index'


const NowWeatherInfo = ({ data = {} }) => {
  return <div className="now-weather-info">
      <h3 className="city">厦门</h3>
      <div className="weather-icon">
        <img src={require(`../images/${data.icon || '01d'}.png`)} alt="" />
        <span>{data.description}</span>
      </div>
      <p className="temperature">
        {kelvinsToCelsiusTemperature(data.temp_min)}°/ {kelvinsToCelsiusTemperature(data.temp_max)}°
      </p>
      <div className="weather-info">
        <div className="air-quality">
          <span>空气质量</span>
          <span className="air-quality-result">优</span>
        </div>
        <div className="wind-info">
          <img src={require('../images/Wind.png')} alt="" />
          <span>{data.speed}米/秒</span>
        </div>
      </div>
    </div>
}
export default NowWeatherInfo