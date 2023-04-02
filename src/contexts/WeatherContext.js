import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import {getWeatherData} from '../config/weatherapi'

const WeatherContext = createContext(null);

export const useWeather = () => {
    return(useContext(WeatherContext));
}

export const WeatherContextProvider = (props) => {
    const [searchCity,setSearchCity] = useState('');
    const [data,setData] = useState(null);
    const getData = () => {
        getWeatherData(searchCity).then((citydata) => setData(citydata)).catch((err) => console.log('error while getting the data'));
    }
    return(
        <WeatherContext.Provider value={{searchCity,setSearchCity,data,setData,getData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}