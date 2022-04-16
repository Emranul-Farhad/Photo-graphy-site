import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/page-2.png'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className='d-flex justify-content-between container '>
                <div className='navbarimg'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className='Navbar'>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/blogs' >Blogs</NavLink>
                    <NavLink to='/about-me' >About Me</NavLink>
                    <NavLink to='/login' >Login </NavLink>
                    <NavLink to='/login' >signup</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;