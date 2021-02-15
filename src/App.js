import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from './SearchBox';
import Imagen from './Imagen.js'
import './grid-portafolio.css'
import './normalize.css'
import LocationContainer from './LocationContainer.js'
import ResidentInfo from './ResidentInfo.js'
import Content from './content.js'
import AxiosLocation from './AxiosLocation.js'

function App() {

  let url = 'https://rickandmortyapi.com/api/location/?name=Earth'
  AxiosLocation(url);
  

  return (
    <div className="App">
      <SearchBox />
      <Content/>  
    </div>
  );
}

export default App;
