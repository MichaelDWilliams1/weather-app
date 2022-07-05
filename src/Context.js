import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}){
const [weatherData, setWeatherData] = useState([{
    location: '',
    temperature: Number,
    condition: ''
}])

const [searchData, setSearchData] = useState('')


//will only re-render when user chooses a new location to check the weather for
useEffect(()=> {
    async function getData(){
        if(searchData === '') return
      const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=f028dfec58c64525bd7161129222504&q=${searchData}&aqi=no`)
      const data = await res.json()
      setWeatherData([{
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text
      }])
    }
    getData()
  }, [searchData])

console.log(weatherData)

 //user types a city. this will recall api to find this city. 
  const searchLocation = (name) => {
 setSearchData(name)
  }

return(
    <Context.Provider value={{weatherData, searchData, searchLocation}}>
        {children}
    </Context.Provider>
)
}

export {ContextProvider, Context}