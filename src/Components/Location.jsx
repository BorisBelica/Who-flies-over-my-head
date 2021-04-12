// imports
import React, { useState, useEffect } from "react";

// SASS
import './Location.scss';

function Location(props) {

  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  
  // first load of page
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      
      // setting longitude and lattitude to state and fix to max 5 numbers after .
      setLatitude(position.coords.latitude.toFixed(5))  
      setLongitude(position.coords.longitude.toFixed(5))

      props.handleLongitude(position.coords.longitude)
      props.handleLatitude(position.coords.latitude)
    });
  }, [])

  return (
    <div className="location-section">
      <h2>Tvoja poloha</h2>
        <p> [{ latitude } s.š]  || [{ longitude } v.d.] </p>
    </div>
  );
}

export default Location;