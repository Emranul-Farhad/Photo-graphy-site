import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/page4.png'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className='d-flex justify-content-between container '>
                <div className='navbarimg'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className='Navbar'>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/' >Home</NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/services'>services</NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/about-me'>About Me</NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/blogs' >Blogs</NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/login-signup' >Login </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;