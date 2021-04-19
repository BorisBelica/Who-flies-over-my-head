
// imports
import React, { useState, useEffect } from "react";

// SASS
import './Location.scss';


import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';


function Location(props) {

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
  }, [props])

  return (
    <div className="location-section">
      <PersonPinCircleOutlinedIcon style={{ fontSize: 90 }} />
      <h2>Tvoja poloha</h2>
      <div className="location-box">
        <div>
          <p className="postion">{ latitude }</p>
          <p className="postion-text">severnej šírky</p>
        </div>
        <div>
          <p className="postion">{ longitude }</p>
          <p className="postion-text">východnej dĺžky</p>
        </div>
      </div>
    </div>
  );
}

export default Location;