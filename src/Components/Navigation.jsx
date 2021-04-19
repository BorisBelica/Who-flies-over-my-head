import React from 'react'
import { NavLink } from 'react-router-dom';


// styles
import styles from '../Components/Navigation.scss'


const Navigation = (props) => {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" activeClassName={styles.active} exact>Home</NavLink>
        </nav>
    )
}

export default Navigation
