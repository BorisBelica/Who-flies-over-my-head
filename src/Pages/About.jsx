import React from 'react'

//BOOTSTRAP-UI
import 'bootstrap/dist/css/bootstrap.min.css';



// SASS
import '../App.scss';
import '../Pages/About.scss';

function About() {
  return (
    <div className="about-page">
        <h1>About page</h1>
        
        <p>
          Aplikácia bola vytvorená ako bakalársky projekt. 
        </p>
        <p>Aktuálna verzia: 0.9.0 beta</p>
    </div>
  )
}

export default About