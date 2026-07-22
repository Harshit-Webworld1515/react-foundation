import Searchbox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import './WeatherApp.css'
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 40.6,
        humidity: 63,
        temp: 33.6,
        tempMax: 33.6,
        tempMin: 33.6,
        weather: "light rain"
    })
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div >
            {/* <h1 className="logo">🌤 SkyCast</h1> */}
            <div className='weather'>
                <Searchbox updateInfo={updateInfo} />
                <InfoBox Info={weatherInfo} />
            </div>

        </div>
    )
}