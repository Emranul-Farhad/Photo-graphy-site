import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './ServiCart.css'



const ServiCart = (props) => {
     const {image, text , offer , price} = props.services
     const navigate = useNavigate()

    return (
        <div className='prodcucts'>
            <div className="product-card ">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                    <img src={image} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory"> {text} </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small> {offer} </small> {price} </div>

                        <div className="product-links">

                        <button onClick={()=> navigate('/photos')}  className='pr-button' > <FontAwesomeIcon icon={faEye} ></FontAwesomeIcon> </button>

                        <button  className='pr-button' > <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiCart;