import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {allIcons} from '../utils/icons';

const initialState = { weatherData: {}, loading: false, error: null,messageError: "", showAlert:false};

const apiKey = import.meta.env.VITE_APP_ID;

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city, { rejectWithValue }) => {
   
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    showMessageError :(state,action)=>{
        console.log('action from showMessageError',action.payload)
        state.messageError=action.payload;
        state.showAlert = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.showAlert=false;
        state.messageError = "";
        state.error=null;
      })

      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        const icon = allIcons[ action.payload.weather[0].icon];
        state.weatherData = {
          humidity: action.payload.main.humidity,
          windSpeed: action.payload.wind.speed,
          temperature: Math.floor(action.payload.main.temp),
          location: action.payload.name,
          icon: icon,
        }
        state.showAlert = false;
      })

      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.messageError = action.payload;
        state.showAlert=true;
      });
  },
});

export const {showMessageError}=weatherSlice.actions;
export default weatherSlice.reducer;