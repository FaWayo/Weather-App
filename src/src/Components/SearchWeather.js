import React, { useState} from 'react';
import axios from 'axios';


function SearchWeather() {
     const[country, setCountry]=useState('')
     const[city, setCity]=useState('')
     const[weather,setWeather]= useState(null)
     const[state, setState] = useState([])

     
      
    const handleCountryInput = (event)=>{
        setCountry(event.target.value)
        console.log(country)
    }

    const handleCityInput=(event)=>{
        setCity(event.target.value)
        console.log(city)
    }

    
       
    
    
    const handleReset=()=>{
      (document.querySelectorAll('input')).forEach(
        input => (input.value='')
      )
      setState({itemvalues:[{}]
      })
    }

    
    const getWeather=(event)=>{
      event.preventDefault()
  
    if(country && city)
    
      axios.get(`http://api.weatherstack.com/current?access_key=9ec743c2f0dbae6a8964df4d63b73a69&query=${country},${city}`)
    //  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=adad2e9adff8fecff6843b5b45de1455
    //   `)
      .then((res)=>{
        console.log(res.data)
        setWeather(res.data)
        
      })
      .catch((err) => console.log(err))
    }
    
      
    return (
        <div>
            <form>
                
              <input type='text' value={country} placeholder='Enter Country' onChange={handleCountryInput}/>
              <input type='text' value={city} placeholder='Enter City' onChange={handleCityInput}/>
               <button onClick={getWeather}> Search</button>

             <button onChange={handleReset}>Clear</button>
            </form>
     
            {
                 weather&& (
                   <div>
                    <h1>{weather.request.query}</h1>
                    <h2>{weather.current.observation_time}</h2>
                    <h2>{weather.current.temperature}</h2>
                   <img src={weather.current.weather_icons} alt="weather icons"/>
                   <h2> {weather.current.weather_descriptions} </h2>
                   
                   
                   </div>
                   )
                 
                
              }                  
     </div>
    )  
    }


export default SearchWeather
