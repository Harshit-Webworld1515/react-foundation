import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({Info}) {

    const INIT_URL="https://plus.unsplash.com/premium_photo-1739267890142-2deaa9cad305?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { Info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temprature: {Info.temp}&deg;C</p>
                        <p>Humidity: {Info.humidity}</p>
                        <p> Min Temp: {Info.tempMin}&deg;C</p>
                        <p> Max Temp: {Info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{Info.weather}</i> and Temp. feels like: {Info.feelsLike}&deg;C</p>
                        <p></p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}