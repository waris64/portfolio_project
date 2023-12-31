import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import './Main.css';
import Mine from '../assets/Mine.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.jpeg';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedIn.png';
const Animation = () => {
    useEffect(() => {
        Aos.init();
    }, [])
}
const Abt = () => {
    Animation();
    return (
        <div className="abt">
            <div className="sec" >
                <section data-aos="zoom-out">
                    <img src={Mine} alt="aboutpage" className="mine" data-aos="slide-right" />
                </section>
                <section className="content" data-aos="zoom-out">
                    Hi! I am Waris    Front End Developer.<br></br>
                    Looking for a professional WordPress and custom website developer?<br></br> Look no further! With over 2 years of
                    experience in web development, I specialize in
                    designing and developing all types of
                    websites, including <br></br>Wix, Shopify,
                    E-Commerce, Real Estate, Restaurant, LMS,                and more. I have expertise in HTML, CSS, JavaScript, PHP, and other technical skills.<br></br> My top priority is client satisfaction, and I offer lifetime support, unlimited revisions, and transparent pricing to ensure that you are completely satisfied with the end product.<br></br> Contact me today to discuss your project and let's get started!
                    It is a long established fact that a reader will
                    be distracted by the readable content of a page when looking at its layout.
                    <br></br>
                    <a href="https://drive.google.com/file/d/1G39B6uMIeZyXTKW5buN2NydSTJAMi6FF/view?usp=sharing" className="button-30" download data-aos="zoom-in-down">Resume</a>
                </section>
            </div>
            <section className="social">
                <section className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/muhammad-waris-saleh-30a09720b/">
                        <img src={linkedIn} data-aos="fade-right" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/waris_029/">
                        <img src={insta} data-aos="zoom-in-right" />
                    </a>
                    <a target="_blank" href="https://twitter.com/Waris029">
                        <img src={twitter} data-aos="zoom-in-right" />
                    </a>
                    <a target="_blank" href="https://web.facebook.com/Waris029/" rel="noopener">
                        <img src={facebook} alt="logo" data-aos="zoom-in-right" />
                    </a>
                    <br></br>
                </section>
            </section>
        </div>
    );
}
export default Abt;