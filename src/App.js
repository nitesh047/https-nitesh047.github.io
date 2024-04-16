import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import ReactGA from "react-ga4";

ReactGA.initialize("G-WEDMK83T4H");
ReactGA.send({ hitType: "pageview", page: document.location.pathname, title: "Custom Title" });

function App() {
  return (
    <>
    <Header/>
    <Home/>
    </>
  )
}

export default App