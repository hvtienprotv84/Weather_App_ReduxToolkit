import { Fragment } from "react";

import "./Weather.css";

import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const Weather = ({ weatherData }) => {
  return (
    <Fragment>
      <img src={weatherData.icon} alt="weatherIcon" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°c</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity_icon" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind_icon" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Weather.propTypes;
export default Weather;
