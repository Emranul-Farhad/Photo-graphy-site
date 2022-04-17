import React from 'react';
import Nav from '../components/Navbar/Nav';
import WovenImageList from './masonary/Masonary';
import './Photo.css'



const Photo = () => {
    return (
        <div>
            <Nav></Nav>
            <h1 className='mt-5 text-center masonaryText'> MY BEST PHOTO <br /> 
            <span className='masonarytext'> OF THIS MONTH</span>  </h1>
            
            <div className='mt-5 '>
                <WovenImageList></WovenImageList>
            </div>
        </div>
    );
};

export default Photo;