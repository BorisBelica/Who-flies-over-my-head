import React from 'react'

import '../Components/Footer.scss'

function Footer() {
  return (
    <div>
        <footer className="App-footer">
        <p className="who">
          Vytvoril
          <a href="https://boris-belica.sk/" rel="noreferrer" target="_blank">
            {" "}
            Boris Belica
          </a>
        </p>

        <p className="who">
          Fly informations thank's to
          <a
            href="https://opensky-network.org/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Opensky Network
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Footer