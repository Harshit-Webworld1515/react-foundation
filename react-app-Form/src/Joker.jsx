import { useState,useEffect } from "react";

export default function Joker() {
    const url="https://official-joke-api.appspot.com/random_joke";
    const [joke,setJoke]= useState({});
    const  getNewJoke=async()=>{
        let response= await fetch(url)
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        setJoke({
            setup:jsonresponse.setup,
            punchline:jsonresponse.punchline,
        });
    }
    useEffect(()=>{
        getNewJoke();
    },[])
    return (
        <div>
            <h2>The Joker</h2>
            <p>I'm the joker! Check out this joke:</p>
            <h3>🥴: {joke.setup}</h3>
            <p>😜: {joke.punchline}</p>
            <button onClick={getNewJoke}>New joke</button>
        </div>
    );
}