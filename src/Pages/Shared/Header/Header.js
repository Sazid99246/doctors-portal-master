import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><CustomLink to='/'>Home</CustomLink></li>
              <li><CustomLink to='/about'>About</CustomLink></li>
              <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
              <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
              <li><CustomLink to='/contact'>Contact Us</CustomLink></li>
              <li><CustomLink to='/login'>Login</CustomLink></li>
            </ul>
          </div>
          <Link class="btn btn-ghost normal-case text-xl" to='/'>Doctors Portal</Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><CustomLink to='/'>Home</CustomLink></li>
            <li><CustomLink to='/about'>About</CustomLink></li>
            <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
            <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
            <li><CustomLink to='/contact'>Contact Us</CustomLink></li>
            <li><CustomLink to='/login'>Login</CustomLink></li>
          </ul>
        </div>
      </div>
    );

};

export default Header;