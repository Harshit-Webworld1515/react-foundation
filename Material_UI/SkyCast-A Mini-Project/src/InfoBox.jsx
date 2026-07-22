import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import WbSunnyIcon from '@mui/icons-material/WbSunnyTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



import "./InfoBox.css"
export default function InfoBox({ Info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1765881657007-3a21bdaf6e9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1602521519812-01bbc9ab135a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1739267890142-2deaa9cad305?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let Info = {
    // city:"Ayodhya",
    // feelsLike: 40.6,
    // humidity: 63,
    // temp: 33.6,
    // tempMax: 33.6,
    // tempMin: 33.6,
    // weather: "light rain",
    // } 
    return (
        <div className="InfoBox">
            {/* <p>{ Info.weather}</p> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{
                            height: 200,
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "bottom", // niche wala part dikhega
                        }}
                        image={Info.humidity > 80 ? RAIN_URL : Info.temp < 15 ? COLD_URL : Info.temp >= 15 && Info.temp < 35 ? INIT_URL : HOT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}{Info.humidity > 80 ? <ThunderstormTwoToneIcon/> : Info.temp < 15 ? <AcUnitTwoToneIcon/> : Info.temp >= 15 && Info.temp < 35 ? <SmokingRoomsIcon/> : <WbSunnyIcon sx={{ color: "#FFC107" }} />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p><ThermostatIcon sx={{ color: "red" }} />Temprature: {Info.temp}&deg;C</p>
                            <p><WaterDropIcon sx={{ color: "blue" }} />Humidity: {Info.humidity}</p>
                            <p><TrendingDownIcon sx={{ color: "red" }}/> Min Temp: {Info.tempMin}&deg;C</p>
                            <p><TrendingUpIcon sx={{ color: "green" }} /> Max Temp: {Info.tempMax}&deg;C</p>
                            <p><ThermostatIcon sx={{ color: "#ff9800" }} />The Weather can be described as <b>{Info.weather}</b> and Temp. feels like: <b>{Info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}