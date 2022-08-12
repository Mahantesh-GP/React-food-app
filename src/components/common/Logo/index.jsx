import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
      <b><h3>   <Link style={{textDecoration:'none',color:'black'}} to='/'> Manya's Kitchen</Link> </h3></b>
      </span>
    </div>
    <p>
      <b><h2> Homemade delicious food</h2></b>
    </p>
  </div> 
);

export default Logo;
