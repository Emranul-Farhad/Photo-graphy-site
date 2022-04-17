import React from 'react';
import Nav from '../Navbar/Nav';
// import ServiCart from '../serviceCart/ServiCart';
import Services from '../services/Services';

const MyService = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='mt-5'>
            <Services></Services>
            </div>
        </div>
    );
};

export default MyService;
