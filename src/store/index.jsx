import { configureStore } from "@reduxjs/toolkit";

import weather from '../store/weatherSlice'

const store=configureStore({
    reducer:{
        weather,
    }
})

export default store;