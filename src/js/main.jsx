import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import Home from './components/Home';
import MiComponente from './components/MiComponente.jsx'

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
  const cinco = Math.floor(counter / 10000);
  const cuatro = Math.floor(counter / 1000);
  const tres = Math.floor(counter / 100);
  const dos = Math.floor(counter / 10);
  const uno = Math.floor(counter / 1);
  counter++;

  root.render(
    <MiComponente digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} />
  );
},
  1000);