import React,{useEffect} from 'react'
import './row.css'
import axios from './axios'

export default function Row({title, fetchUrl, isLargeRow=false}) {
  const [movies, setMovies] = React.useState([])
  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
  }
  fetchData()},[fetchUrl])
  console.log(movies)

  return (
    <div className="row" >
    {title}
    <div className="row_posters">
 {movies.map(movie =>(
   <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
   key={movie.id}
   src={`${base_url}${
      isLargeRow ? movie.poster_path : movie.backdrop_path
   }`} alt={movie.name}  />
 ) )}      
    </div>
    </div>
  )
}
