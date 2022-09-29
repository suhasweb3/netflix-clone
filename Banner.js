// import axios from 'axios'
import React, { useEffect } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Request'
// request
// {instance}

export default function Banner() {
const [movie,setMovie] = React.useState([])

useEffect(() => {
async function fetchData() {
 const request = await  axios.get(requests.fetchTrending);
  setMovie(
    request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
  )
  return request;
}
fetchData()
},[])  ;
 
console.log(movie)
  function turncate(string,n){
return string?.length > n ? string.substr(0 , n - 1 ) + '...' : string
  }
  return (

        <div className="banner" style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:`cover`,
            backgroundPosition:`center center`,
        }}>
        <div className="banner-contents"> 
            <div className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </div>
            <div className="banner-buttons">
              <button className="banner-button">Play</button>
              <button className="banner-button">List</button>
            </div>
          <div className="banner-description">
         {turncate(movie?.overview,150)}
          </div>
        </div>
          <div className="banner-fadebottom" /  >
        </div>
  )
}
