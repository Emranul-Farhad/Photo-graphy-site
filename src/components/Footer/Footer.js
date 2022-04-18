import React from 'react';
import { IoLogoFacebook } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='fotter'>
                <footer class="content-footer mt-5">
                    <div class="footer-container">
                        <p>Say hi to me on these social networks:</p>
                        <a className='link'>
                            <IoLogoFacebook></IoLogoFacebook>
                        </a>
                        &nbsp;
                        <a className='link'>
                            <AiFillInstagram></AiFillInstagram>
                        </a>
                        &nbsp;
                        <p> All right reserved by Emranul - {new Date().getFullYear()} </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;