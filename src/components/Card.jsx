import React from 'react'
import { useWeather } from '../contexts/WeatherContext';

const Card = () => {
    const weather = useWeather();
    return(
        <div>
            <img alt='Weather Visual' src={weather.data?.current?.condition?.icon}></img>
            <p className='city-name'>{weather.data?.location?.name}</p>
            <p className='city-temprature'>{weather.data?.current?.temp_c}</p>
        </div>
    )
}

export default Card;