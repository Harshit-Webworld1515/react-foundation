import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from "@mui/material/Alert";

export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    //Built-in geocoding in open weather Api
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const getWeatherInfo = async () => {
        try {
            setError(false)
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
            // setError("No such place in our api");
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }
    return (
        <div className='SearchBox'>
            <h1>🌤 SkyCast</h1>
            <h3>Get Live Weather Updates</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    onChange={handleChange}
                    value={city}
                    required
                />&nbsp;
                
                <Button variant="contained" type='submit'>Search</Button>
                {error && (
                    <Alert severity="error">
                        Sorry! 😒 No such place exists in our database.
                    </Alert>
                )}
            </form>
        </div>
    )
}