//Component
import axios from './axios';
import React, {useState,useEffect,useRef} from 'react'
import "./Row.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//image url to fetch images
const baseUrl = "https://image.tmdb.org/t/p/original/";

//Row component takes in title of row , fethUrl of the row ( example netflix originals) , isLargeRow ( only first row is large poster)
function Row({title,fetchUrl,isLargeRow = false}) {
    //movies list stores get result of API
    const[movies,setMovies] = useState([]);

    const posterRow  = useRef(null);

    // Use Effect to fetch data on change of fetchUrl
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const slideRowLeft = () => {
        posterRow.current.scrollLeft -= 400;
      };

    const slideRowRight = () => {
        posterRow.current.scrollLeft += 400;
      };

    return (
        <div className = "row">
            <h2>{title}</h2>     
            
            {/* Slide carousel arrows for posters */}
            <div className = "row_posters" ref = {posterRow} >
            <ArrowBackIosIcon onClick = {slideRowLeft} className = "slideRowLeft"/>
            <ArrowForwardIosIcon onClick = {slideRowRight} className = "slideRowRight"/>
            <div onClick = {slideRowRight}  className = "slideRowRight" role="button">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </div> 
          

                {/* Images are loaded according to isLargeRow is true then Largeposter is selected else normal  */} 
                {movies.map(movie => {
                    if(isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path){
                    return (
                        <img 
                            className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src ={baseUrl + (isLargeRow ? movie.poster_path : movie.backdrop_path)}
                            key = {movie.id} />
     
                            );}
                })}
            </div>
        </div>
    )
}

export default Row
