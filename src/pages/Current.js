
import React, {useContext} from 'react'
import {Context} from '../Context'

function Current(){
    const  {weatherData} = useContext(Context) 

    return(
<div className='currentLocationWeatherCard'>
<div className='cardWeatherStats'>
            <p className='cardLocationName'>{weatherData[0].location}</p>
            <div className='cardLocationContainer'>
            <p className='cardLocationCurrentTemp cardLocation'>{weatherData[0].temperature}<i className="ri-fahrenheit-line"></i></p>
        <p className='cardLocation'>{weatherData[0].condition}</p>
        </div>
        </div>
    </div>
)} 

export default Current


