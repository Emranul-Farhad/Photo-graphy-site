import React from 'react';
import Blink from '../../blinkanimation/blink';
import Home from '../../blinkanimation/blink';
import man from '../../Images/man2.png'
import Nav from '../Navbar/Nav';
import Services from '../services/Services';
import './Herro.css'

const Herro = () => {
    return (
        <div>
            <div className='herrobg'>
                <Nav ></Nav>
                <div className=" container heropart">
                <div>
                    <Blink></Blink>
                    </div>
                    <div className="heroimg d-sm-none d-md-block d-lg-block d-xl-block ">
                        <img className='img-fluid d-sm-none d-md-block d-lg-block d-xl-block' src={man} alt="" />
                    </div>
                </div>       
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Herro;