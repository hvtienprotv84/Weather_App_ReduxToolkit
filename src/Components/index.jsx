import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeatherData } from "../store/weatherSlice";
import AlertBox from "../utils/Alert";
import "./index.css";

import Search from "./Search";
import Weather from "./Weather";

const WeatherIndex = () => {
  const { loading, weatherData, messageError, showAlert } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData("Algiers"));
  }, [dispatch]);

  return (
    <Fragment>
      {showAlert && <AlertBox messageError={messageError} />}
      <div className="weather">
        <Search fetchWeatherData={fetchWeatherData} />
        {loading ? (
          <p>Loading...Please Wait!</p>
        ) : (
          weatherData && (
           <Weather weatherData={weatherData}/>
          )
        )}
      </div>
    </Fragment>
  );
};

export default WeatherIndex;
