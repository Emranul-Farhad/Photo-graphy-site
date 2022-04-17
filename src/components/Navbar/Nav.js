import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../FirebaseKey/Key';
import logo from '../../Images/page4.png'
import './Nav.css'

const Nav = () => {

const [user] = useAuthState(auth)

const logout = () => {
    signOut(auth);
  };

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

                   { user?  <button onClick={logout} className='pr-button logoutbutton' > <FontAwesomeIcon icon={faRightToBracket} ></FontAwesomeIcon> </button>:

                    <NavLink    className={({ isActive }) => (isActive ? "active" : "nav-list")} to='/login-signup' >Login </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;