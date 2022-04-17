import React, { useContext, useEffect, useState } from 'react';
import { Servicestate } from '../../App';
import ServiCart from '../serviceCart/ServiCart';
import './Services.css'




const Services = () => {

const [service , setService] = useContext(Servicestate)

useEffect(()=> {
    fetch("data.json")
    .then(res => res.json())
    .then( data => setService(data))
}, [setService] )

    return (
        <div>
            <div className='divider'>
                <div className='leftone'></div>
                <h1 className='text-center mt-5'>  MY  SERVICES </h1>
                <div className='rightone' ></div>
            </div>
            <div className='productsCards container mt-5'>
                {
                    service.map(service =>  <ServiCart services={service} > </ServiCart> )
                }
            </div>
        </div>
    );
};

export default Services;