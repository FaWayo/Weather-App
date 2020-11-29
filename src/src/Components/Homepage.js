import React from 'react'
import SearchWeather from './SearchWeather'
import {Link} from 'react-router-dom'

function Homepage() {
    return (
        <div>
            <Link to='/login'><span>LogOut</span></Link>
            <SearchWeather/>
        </div>
    )
}

export default Homepage
