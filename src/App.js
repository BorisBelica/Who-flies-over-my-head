// IMPORTS
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
//import { Switch, Route, } from 'react-router-dom';

//BOOTSTRAP-UI
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Location from './Components/Location'
//import Navigation from './Components/Navigation'

// SASS
import './App.scss';
import './Components/Location.scss';
import './Components/Navigation.scss'


// FUNCTION REACT APP
function App() {

  // STATES
 const [flyData, setflyData] = useState({})

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
  const loadDataFromApi = () => {
    const options = {
      method: 'GET',
      
      // CELE SLOVENSKO
      //url: `https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=49.4800&lomax=22.2500`,
      
      // TVOJA POZICIA
      url: `https://opensky-network.org/api/states/all?lamin=${minLatitude}&lomin=${minLongitude}&lamax=${maxLatitude}&lomax=${maxLongitude}`,
      // params: {},
      // headers: {}
    };
    axios.request(options)
      .then(function (response) {
        setflyData(response.data)
        console.log('FLYDAT:')
        console.log(response.data)
      })
      .catch(function (error) {
         console.error(error);
      });

      console.log('Max LONGITUDE from CHILD:', maxLongitude)
      console.log('Min LONGITUDE from CHILD:', minLongitude)
      console.log('Max LATITUDE from CHILD:', maxLatitude)
      console.log('Min LATITUDE from CHIL:', minLatitude)
  }
  

  
// FIST DATA LOAD - FIRST USE EFFECT
  useEffect( () => {
    loadDataFromApi()
  },[])



  // TEMPLATE
  return (
    <div className="App">

      <header className="App-header">
        <h1>Kto mi letí nad hlavou?</h1>
        <p>Candy canes pie topping dragée bonbon muffin fruitcake powder gingerbread. 
          Apple pie candy canes chocolate bar donut gummi bears.</p>

        
        <Location 
             handleLongitude={handleLongitude}
             handleLatitude={handleLatitude}
        />
        
      </header>

      <main>
        <div>
          {
          /* IF THERE IS NO DATA YET */
          flyData.states ? (
            
            <div className="stats-list">
            {
              flyData.states.map((flight, index) => {
                //console.log(index)
                return(
                  <Card key={`${index}`}  className="flight" style={{ width: '20rem' }}>
                    <ul key={`${index}`}>
                    <Card.Body className="flight">
                      <Card.Title>
                        <div>
                          <h2 className="card-title">{flight[1]}</h2>
                          <p className="card-subtitle">číslo letu</p>
                        </div>
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <li key={'a' + index} >Pôvod: {flight[2]}</li>
                      </ListGroupItem>
                      <ListGroupItem>
                        <li key={'b' + index} >Zemepisná dĺžka: {flight[5]}</li>
                      </ListGroupItem>
                      <ListGroupItem>
                        <li key={'c' + index} >Zemepisná šírka: {flight[6]}</li>
                      </ListGroupItem>
                      <ListGroupItem>
                        <li key={'d' + index} >Rýchlosť km/h: {(flight[9]*3.6).toFixed(2)}</li>
                      </ListGroupItem>
                      <ListGroupItem>
                        <li key={'e' + index} >Klesanie / Stúpanie: {flight[11]}</li>
                      </ListGroupItem>
                    </ListGroup>        
                      <Button className="card-button"
                        href="https://google.com/search?q={${flight[id]}}" target="_blank" >Viac
                      </Button>
                    </ul>
                  </Card>
                )
              }
              )}
            </div>  
                    
          ):(
            /* LOADING DATA */
            <Spinner animation="border" variant="success" role="status">
              <span className="sr-only">Pripravujem dáta!</span>
            </Spinner>
          )
          }
        </div>

        <p>Chceš zobraziť celé Slovensko?</p> 
        <Button 
          className="card-button"
          href="asdasds" target="_blank">Zobraziť
        </Button>
      </main>


      <footer className="App-footer">
            <p>Created by Boris Belica</p>
            <p className="who">Fly details thanks to 
              <a href="https://opensky-network.org/" rel="noreferrer" target="_blank"> Opensky Network</a>
            </p>
       </footer>
    </div>
  );
}

export default App;