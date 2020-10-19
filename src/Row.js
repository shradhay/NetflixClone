import React,{useState,useEffect} from 'react'

import axios from "./axios"
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


const base_url="https://image.tmdb.org/t/p/original"
function Row({title,fetchURL,isLargeRow}) {

    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=>{

        async function fetchdata(){
            const req = await axios.get(fetchURL);
            
            setMovies(req.data.results);
            return req;

        }
        fetchdata();

    },[fetchURL]);
    // console.log(movies)
    const options={
        height:"390",
        width:"100%",
        playersVars:{
            //
            autoplay:1,
        }
    }
    const handleClick =(movie)=>{
        if (trailerUrl) {
            setTrailerUrl('')

        }
        else {
            movieTrailer(movie?.name || "")
            .then(url=>{
                   const urlParams = new URLSearchParams( new URL(url).search);
                   setTrailerUrl  ( urlParams.get('v'))
            
                })
            .catch(error=> console.log(error))
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie =>{
                    return(
                    <img 
                    onClick={()=> handleClick(movie)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ?
                        movie.poster_path : movie.poster_path}`} alt={movie.name} />

                    )
                })}

            </div>
            {trailerUrl && <YouTube 
            videoId={trailerUrl} 
            opts={options}
               />
             }
            
            
        </div>
    )
}

export default Row
