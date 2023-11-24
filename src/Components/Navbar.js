import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css" ; 
const Navbar = () => {
  return (
    <div className='Header'>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar