import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/final-logo.png'
import './Header.css'
const Header = () => {
  return (
    <div>
     
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-gray-400 text-white menu-compact font-semibold  dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about' className="justify-between">About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
    <Link className="lg:ml-16"><img className="logo" src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'> About</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end hidden mr-4 lg:flex">
  <a target='_blank ' href="https://drive.google.com/file/d/1SxQ9Qz5HbkJF0BmgnX4l5BROLeBUEAnC/view?usp=sharing"><button className="btn btn-outline btn-primary">DOWNLOAD CV</button></a>
  </div>
</div>

    </div>
  );
};

export default Header;
