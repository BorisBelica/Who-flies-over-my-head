import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


//BOOTSTRAP-UI
import "bootstrap/dist/css/bootstrap.min.css";

//MATERIAL-UI
import CircularProgress from "react-spinner-material";

// Components
import Location from "../Components/Location";
import FlyCard from "../Components/FlyCard";

// SASS
import "../App.scss";
import "../Components/Location.scss";
import "../Components/FlyCard.scss";

function Home() {
  // STATES
  const [flyData, setflyData] = useState({});

  // Are data loaded from API? Are there any data?
  const [loading, setLoading] = useState(true);

  // max and min - square of 30 km around you
  const [maxLatitude, setMaxLatitude] = useState();
  const [minLatitude, setMinLatitude] = useState();
  const [maxLongitude, setMaxLongitude] = useState();
  const [minLongitude, setMinLongitude] = useState();

  // GETING POSTION from LOCATION component in data variable
  // setting max and min longitude => +/- 30 km (0.4102)

  function handleLongitude(data) {
    setMinLongitude((data - 0.4102).toFixed(5));
    setMaxLongitude((data + 0.4102).toFixed(5));
  }

  function handleLatitude(data) {
    setMinLatitude((data - 0.2744).toFixed(5));
    setMaxLatitude((data + 0.2744).toFixed(5));
  }
  // ------------------------------------------------------ //

  // GETTING DATA FROM API
  useEffect(() => {
    const options = {
      method: "GET",

      // CELE SLOVENSKO
      //url: `https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=49.4800&lomax=22.2500`,

      // ZIADNE DATA
      url: `https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=48.0500&lomax=22.2500`,

      // TVOJA POZICIA
      //url: `https://opensky-network.org/api/states/all?lamin=${minLatitude}&lomin=${minLongitude}&lamax=${maxLatitude}&lomax=${maxLongitude}`,

      // params: {},
      // headers: {}
    };

    if (
      maxLongitude !== undefined &&
      minLongitude !== undefined &&
      maxLatitude !== undefined &&
      minLatitude !== undefined 
    ) {
      axios
        .request(options)
        .then(function (response) {

          setflyData(response.data);
          if (response.data.states !== null) {
            console.log('Údaje do STATES načítané!! LOADING NA SET TO FALSE')
            setLoading(false);
          } else {
            console.log('NIE SU DAJE V STATES! LOADING NA SET TO FALSE')
            setLoading(false);
            console.log(loading);
          }
        })
        .catch(function (error) {
          console.error(error);
        });

        

      //console.log(maxLongitude, minLongitude, maxLatitude, minLatitude)
    }
  }, [maxLongitude, minLongitude, maxLatitude, minLatitude]);

  // TEMPLATE
  return (
    <div className="App">

      <main>
        <h1>Kto mi letí nad hlavou?</h1>

        {
          /* LOADING IS TRUE - SPINNER ANIMATION */
          loading ? (
            <CircularProgress
              radius={50}
              color={"#E71D36"}
              stroke={2}
              visible={true}
            />
          ) : (
            /* LOADING ENDS */
            <FlyCard flyData={flyData} />
          )
        }

        <Location
          handleLongitude={handleLongitude}
          handleLatitude={handleLatitude}
        />     
      </main>
    </div>
  );
}

export default Home;
