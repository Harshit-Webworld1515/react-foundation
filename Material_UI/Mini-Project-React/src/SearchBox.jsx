import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function Searchbox() {
    //Geocoding Api key and URL
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    let [city, setCity] = useState("");

    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("")
    }
    return (
        <div className='SearchBox'>
            <h3>Search for The weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    onChange={handleChange}
                    value={city}
                    required
                />&nbsp;
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}