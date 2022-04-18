import React from 'react';
import './Promotion.css'
import man from '../../Images/prman2.png'

const Promotion  = () => {
    return (
        <div className='mt-5 '>
            <div className='offerrbanner mt-5'>
                <div className= "row container ">
                <div className="col-md-5">
                        <img className='img-fluid ' src={man} alt="" />
                    </div>
                    <div className="col-md-7">
                        <p className='promotiomTExt'>When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!</p>
                        <span className='qutes'>__ Emranul Farhad</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Promotion ;