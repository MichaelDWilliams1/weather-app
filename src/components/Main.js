import React, {useContext, useState} from  'react'
import {Context} from '../Context'
import Current from '../pages/Current'

function Main(){
    const [userSearch, setUserSearch] = useState('')
    
    const {searchLocation, searchData, weatherData} = useContext(Context) 

    const handleChange = (event) => {
setUserSearch(event.target.value)
    }

    return(
   
<div className='mainContainer'>
<Current />
    <div className='searchContainer'>
    <input
        type='text'
        name='text'
        placeholder='City Name'
        value={userSearch}
        onChange={handleChange}
    />
    <button onClick={() => searchLocation(userSearch)}  className='searchButton'>Search</button>
    </div>
</div>
    )
}

export default Main




