import React from 'react'
import { useWeather } from '../contexts/WeatherContext';
import Button from './Button';

const SearchBox = (props) => {
    const weather = useWeather();
    return(
        <div>
            <input type="text" value={weather.searchCity} placeholder={props.placeHolder} onChange={(e) => weather.setSearchCity(e.target.value)}/>
            <input type="button" value="Search" onClick={() => {weather.getData(); }}/>
        </div>
    )
}

export default SearchBox;