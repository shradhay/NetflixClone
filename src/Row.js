import React,{useState,useEffect} from 'react'
import axios from "./axios"
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/original"
function Row({title,fetchURL,isLargeRow}) {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{

        async function fetchdata(){
            const req = await axios.get(fetchURL);
            
            setMovies(req.data.results);
            return req;

        }
        fetchdata();

    },[fetchURL]);
    // console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie =>{
                    return(
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ?
                        movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

                    )
                })}

            </div>
            
            
            
        </div>
    )
}

export default Row
