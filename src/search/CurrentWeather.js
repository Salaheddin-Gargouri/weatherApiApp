import React from "react";
import "./currentWeather.css";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> {data.city}</p>
          <p className="weather-discreption"> {data.weather[0].description} </p>
        </div>
        <img
          className="weathericonItem"
          alt="logo"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="buttom">
        <p className="temperature">{data.main.temp}°C</p>
        <div className="details">
          <div className="param_row">
            <span className="param-label">Details</span>
          </div>
          <div className="param_row">
            <span className="param-label">Feels Like :</span>
            <span className="param-value"> 22°C</span>
          </div>
          <div className="param_row">
            <span className="param-label">Wind :</span>
            <span className="param-value"> 2 m/s</span>
          </div>
          <div className="param_row">
            <span className="param-label">Humidity :</span>
            <span className="param-value"> 15 % </span>
          </div>
          <div className="param_row">
            <span className="param-label">Pressur :</span>
            <span className="param-value"> 15 hpa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
