import React from 'react';
import Row from './Row'
import './App.css';
import request from "./request"

function App() {
  return (
    <div className="App">
     <h1>NETFLIX</h1>
     <Row title="Netflix Original" fetchURL={request.fetchNetflixOriginal}/>
     <Row title="Trending Now"  fetchURL={request.fetchTrending}/>
     
    </div>
  );
}

export default App;
