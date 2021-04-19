// IMPORTS
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
//import { geolocated, geoPropTypes } from "react-geolocated";
//import { Switch, Route, } from 'react-router-dom';

//BOOTSTRAP-UI
import 'bootstrap/dist/css/bootstrap.min.css';

//MATERIAL-UI
import CircularProgress from 'react-spinner-material';

// Components
import Location from './Components/Location'
import FlyCard from './Components/FlyCard'
import Demo from './Components/Demo'


//import Navigation from './Components/Navigation'

// SASS
import './App.scss';
import './Components/Location.scss';
import './Components/FlyCard.scss'

// FUNCTION REACT APP
function App() {

  // STATES
 const [flyData, setflyData] = useState({})

 // Are data loaded from API? Are there any data?
 const [loading, setLoading] = useState(true)
 
 // max and min - square of 30 km around you
 const [maxLatitude, setMaxLatitude] = useState()
 const [minLatitude, setMinLatitude] = useState()
 const [maxLongitude, setMaxLongitude] = useState()
 const [minLongitude, setMinLongitude] = useState()

  // GETING POSTION from LOCATION component in data variable
  // setting max and min longitude => +/- 30 km (0.4102)
  const handleLongitude = (data) => {
    setMinLongitude((data - 0.4102).toFixed(5))
    setMaxLongitude((data + 0.4102).toFixed(5))
  }
  const handleLatitude = (data) => {
    setMinLatitude((data - 0.2744).toFixed(5))
    setMaxLatitude((data + 0.2744).toFixed(5))
  }
  // ------------------------------------------------------ //

  // GETTING DATA FROM API 
  useEffect( () => {
      const options = {
        method: 'GET',
        
        // CELE SLOVENSKO
        //url: `https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=49.4800&lomax=22.2500`,

        // ZIADNE DATA
        //url: `https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=48.0500&lomax=22.2500`,

        // TVOJA POZICIA
        url: `https://opensky-network.org/api/states/all?lamin=${minLatitude}&lomin=${minLongitude}&lamax=${maxLatitude}&lomax=${maxLongitude}`,

        // params: {},
        // headers: {}
      };

      if ((maxLongitude !== undefined) && (minLongitude !== undefined) && (maxLatitude !== undefined) && (minLatitude !== undefined )) {
        axios.request(options)
        .then(function (response) {
          setflyData(response.data)
          //console.log('FLYDAT:')
          //console.log(response.data)

          if (response.data.states !== null) {
            //console.log('Údaje do STATES načítané!! LOADING NA SET TO FALSE')
            setLoading(false)
          }
          else {
            //console.log('NIE SU DAJE V STATES! LOADING NA SET TO TRUE')
            setLoading(false)
          }
        })
        .catch(function (error) {
          console.error(error);
        });

        //console.log(maxLongitude, minLongitude, maxLatitude, minLatitude)
      }
  },[maxLongitude, minLongitude, maxLatitude, minLatitude])
  
  // TEMPLATE
  return (
    <div className="App">

      <header className="App-header">
        <h1>Kto mi letí nad hlavou?</h1>
        <p>Sedíš, premýšľaš a zrazu nad tvojou hlavou letí lietadlo. Odkiaľ letí? Kam letí? 
          Odpoveď ti dá táto webová aplikácia
        </p>

        <Location
          handleLongitude={handleLongitude}
          handleLatitude={handleLatitude} 
        />


      </header>

      <main>


      { 
     
      /* LOADING IS TRUE - SPINNER ANIMATION */
      loading ?
      <CircularProgress radius={50} color={"#E71D36"} stroke={2} visible={true}  />

      /* LOADING ENDS */
      : <FlyCard flyData={flyData}/> 
      }
    
      { /* NEW FEATURE NOT DEVELOPER YET */
      /*
      <p>Chceš zobraziť celé Slovensko?</p> 
      <Button className="card-button"href="asdasds" target="_blank">Zobraziť</Button>
      */
      }

      </main>


      <footer className="App-footer">
          <p className="who">Created by 
              <a 
                href="https://boris-belica.sk/" 
                rel="noreferrer" 
                target="_blank"> Boris Belica
              </a>
            </p>

            <p className="who">Fly informations thank's to 
              <a 
                href="https://opensky-network.org/" 
                rel="noreferrer" 
                target="_blank"> Opensky Network
              </a>
            </p>
       </footer>
    </div>
  );
}

export default App;
