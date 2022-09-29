import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner';
import Row from './Row';
import requests from './Request';

function HomeScreen() {
  return (
    <div className='home-screen app'>
{/* navber     */}
<Nav />
{/* <banner */}
<Banner />
{/* rows */}
<Row 
  title='Netflix Originals'
  fetchUrl={requests.fetchNetflixOriginals}
  isLargeRow={true}
/>
<Row 
  title='Trending Now'
  fetchUrl={requests.fetchTrending}
  isLargeRow={true}
/>
<Row 
  title='Comedy Movies'
  fetchUrl={requests.fetchComedyMovies}
  isLargeRow={true}
/>
<Row 
  title='Horror Movies'
  fetchUrl={requests.fetchHorrorMovies}
  isLargeRow={true}
/>
<Row 
  title='Romance Movies'
  fetchUrl={requests.fetchRomanceMovies}
  isLargeRow={true}
/>
<Row 
  title='Documentaries'
  fetchUrl={requests.fetchDocumentaries}
  isLargeRow={true}
/>
    </div>
  )
}

export default HomeScreen