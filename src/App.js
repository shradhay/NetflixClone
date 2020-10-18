import React from 'react';
import Row from './Row'
import './App.css';
import Banner from './Banner'
import request from "./request"
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner/>
     <Row title="Netflix Original"
     isLargeRow 
     fetchURL={request.fetchNetflixOriginal}/>
     <Row title="Trending Now"  fetchURL={request.fetchTrending}/>
     <Row title="Top Rated "  fetchURL={request.fetchToprated}/>
     <Row title="Action Movies"  fetchURL={request.fetchActionMovies}/>
     <Row title="Comedy Movies"  fetchURL={request.fetchComedyMovies}/>
     <Row title="Horror movie"  fetchURL={request.fetchHorrorMovies}/>
     <Row title="Romance Movies"  fetchURL={request.fetchRomanceMovies}/>
     <Row title="Documentries"  fetchURL={request. fetchDocumentries}/>
     
    </div>
  );
}

export default App;
