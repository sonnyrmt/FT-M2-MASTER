import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import { Home, StarOutline } from 'iconoir-react';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                Henry Movies
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >
                            <Home/>
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/favs" >
                            <StarOutline />
                            <p>Favourites</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}