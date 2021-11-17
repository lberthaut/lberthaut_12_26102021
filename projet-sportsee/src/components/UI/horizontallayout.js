import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png'

/**
 * Create horizontal menu layout
 * 
 * @class
 * @this {Horizontallayout}
 * @param {logo} logo du site
 */

export default class Horizontallayout extends React.Component{
    render(){
        return(
            <nav className="horizontallayout">
            <Link to="/accueil">
                <img className="logo" src={logo} alt="logo"></img>
            </Link>
                <ul className="menu">
                    <NavLink to="/accueil">
                        <p>Accueil</p>
                    </NavLink>
                    <NavLink to="/profil">
                        <p>Profil</p>
                    </NavLink>
                    <NavLink to="/reglage">
                        <p>Réglage</p>
                    </NavLink>
                    <NavLink to="/communaute">
                        <p>Communauté</p>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}