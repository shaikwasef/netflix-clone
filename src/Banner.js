//comments
import React, { useEffect , useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from "./Requests"

function Banner() {
    //set top banner 
    const [movie,setMovie] = useState([]);

    //useEffect to fetch the latest netflix orginals on each component mount
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //Set a random poster on every mount of the component using random function
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            );
            return request;
        }
        // call the fetch data function
        fetchData();
    },[]);
    
    // Truncating the description
    function truncate(string , n){
        return string.length > n ? string.substr(0,n-1) + '...' : string ;
    }

    return (
        <header className = "banner" style = {{
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize : "cover" ,
            backgroundImagePosition : "center center"
        }}>

        <div className = "banner_contents">
            <h1 className = "banner_title">{movie?.original_title}</h1>
                 <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className = "banner_description" > {truncate(`${movie?.overview}`,200)} </h1>
            </div> 
        
        <div className = "banner--fadeBottom" />
         
        </header>
    )
}

export default Banner;

