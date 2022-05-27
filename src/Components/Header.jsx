import React from 'react'

import { Link } from "react-router-dom";
import '../Components/Header.scss'

function Header() {
  return (
    <div>
        <header className="App-header">
        <nav>
          <Link to="/">Domov</Link>
          <Link to="/About">O aplikácii</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header