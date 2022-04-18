import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Nav from '../Navbar/Nav';
import './About.css'
import {IoLogoFacebook} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import { ClassNames } from '@emotion/react';





const About = () => {
    return (
        <div>
            <Nav></Nav>
            <div>
                <header class="masthead">
                   <div className='abouttext' >
                   <p class="masthead-intro "></p>
                    <h1 class="masthead-heading ">  </h1>
                   </div>
                </header>
                <section class="introduction-section">
                    <div class="container">
                        <h1>Introduction</h1>
                        {/* <p>Hello! My name is Kedar, rhymes with cheddar, and I'm a <strong>photographer</strong> and <strong>front end dev</strong> intern at Dirigible Studio here in Madison, Wisco.
                            <p /> */}

                            <p> My name Is <strong>Emranul Farhad </strong>  A webdeveloper & photographer , I have 4 years  plus experince in photography. But as a wevdeveloper I satrt my carera 5moths ago . <strong> HTML,CSS , BOOTSTRAP5, TAILWIND,REACT MUI, RACT FIREBASE HOOKS, FIREBASE AUTHENTICATION   JAVASCIPT, REACT, In this path i am beginar but i will doing lots of hard work for learning programing language for became a wevdeveloper.   </strong> </p>

                            <p> Next 5 monts my plane is I will work harder so that I can achieve the goal for my job in the next 2 months as well i will work hard to learn backend technolgy such as node.js mongo db etc  </p>
                    </div>
                </section>

                <section class="location-section">
                </section>

                <section class="questions-section">
                  
                </section>

            </div>
        </div>
    );
};

export default About;