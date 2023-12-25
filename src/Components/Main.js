import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (

    <div className="hero">
      <div className='content' >
        <p>Hi, I am Freelancer</p>
        <h1>React Developer</h1>
        <div>
          <button className='btn-light'><Link to="Contact" className='btn'>Contact</Link></button>
          <button className='btn-dark'><Link to="Project" className='btn'>Projects</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Main;
