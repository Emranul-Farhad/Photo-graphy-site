import React from 'react';
import './ServiCart.css'



const ServiCart = (props) => {
     const {image, text , offer , price} = props.services


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
                            {/* <a href="/"><i className="fa fa-heart"></i></a>
                            <a href="/"><i className="fa fa-shopping-cart"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiCart;