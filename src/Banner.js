import React,{useState,useEffect} from 'react'
import axios from "./axios"
import request from './request'
import "./Banner.css"
function Banner() {


    const [movie, setMovie] = useState([])
    useEffect(() => {
      async function fetchdata(){
        const req = await axios.get(request.fetchNetflixOriginal)
         setMovie(
            req.data.results[
             Math.floor(Math.random() * req.data.results.length-1) ]
         )
         console.log(req)
         return req;
      }
      fetchdata();
    }, [])
    // console.log(movie)

    function truncate (str,n){
        return str?.length > n  ? str.substr(0,n-1) + "..." : str;

    }

    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
         
            }}
        >
        <div className="banner_content">
            <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_button">
                <button className="banner_btn">
                    Play

                </button>
                <button className="banner_btn">
                    My List

                </button>

            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview,150)}
              
            </h1>

        </div>
        <div className="banner--fadebottom">

        </div>
           
            
        </header>
    )
}

export default Banner
