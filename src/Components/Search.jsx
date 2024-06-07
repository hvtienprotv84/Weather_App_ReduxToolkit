import { useRef } from "react";
import { useDispatch } from "react-redux";

import {  showMessageError } from "../store/weatherSlice";
import search_icon from "../assets/search.png";
import './Search.css'

const Search = ({fetchWeatherData}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const searchHandler = (city) => {
    if (city === "") {
      dispatch(showMessageError("Enter a City Name"));
    } else {
      dispatch(fetchWeatherData(city));
    }
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="search" ref={inputRef} />
      <img
        src={search_icon}
        alt="search-icon"
        onClick={() => searchHandler(inputRef.current.value)}
      />
    </div>
  );
};

Search.propTypes;
export default Search;