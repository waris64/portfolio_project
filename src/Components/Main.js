<<<<<<< HEAD
import React from "react";
import './Main.css';
import Mine from '../assets/Mine.jpg';
=======
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Main.css";
import { RiReactjsLine ,SiJquery ,FaCss3Alt ,TbBrandJavascript ,FaBootstrap  } from "react-icons/io5";
import Mine from '../assets/Mine.png';
>>>>>>> bf0f868527aec6119bb8ef000f0007e07090f62a
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.jpeg';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedIn.png';
<<<<<<< HEAD
const Abt = () => {
    return (
        <div className="abt">
            <div className="sec">
                <section>
                    <img src={Mine} alt="aboutpage" className="mine" />
                </section>
                <section className="content">
                    Hi! I am Waris Front End Developer.<br></br>
                    Looking for a professional WordPress and custom website developer?<br></br> Look no further! With over 2 years of
                    experience in web development, I specialize in
                    designing and developing all types of
                    websites, including <br></br>Wix, Shopify,
                    E-Commerce, Real Estate, Restaurant, LMS,                and more. I have expertise in HTML, CSS, JavaScript, PHP, and other technical skills.<br></br> My top priority is client satisfaction, and I offer lifetime support, unlimited revisions, and transparent pricing to ensure that you are completely satisfied with the end product.<br></br> Contact me today to discuss your project and let's get started!
                    It is a long established fact that a reader will
                    be distracted by the readable content of a page when looking at its layout.
                    <br></br>
                    <a href="https://drive.google.com/file/d/1G39B6uMIeZyXTKW5buN2NydSTJAMi6FF/view?usp=sharing" className="button-30" download>Resume</a>
                </section>
            </div>
            <section className="social">
                <section className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/muhammad-waris-saleh-30a09720b/">
                        <img src={linkedIn} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/waris_029/">
                        <img src={insta} />
                    </a>
                    <a target="_blank" href="https://twitter.com/Waris029">
                        <img src={twitter} />
                    </a>
                    <a target="_blank" href="https://web.facebook.com/Waris029/" rel="noopener">
                        <img src={facebook} alt="logo"/>
                    </a>
                    <br></br>
                   

                </section>
            </section>
        </div>
    );
=======

const Animation = () => {
  return <div className="animation-component"></div>
}

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="abt">
      <div className="sec">
        <section data-aos="zoom-out">
          <img src={Mine} alt="aboutpage" className="mine" />
        </section>
        <section className="content" data-aos="zoom-in">
          <h1> Hi! I am <label className="colored-word">Waris</label>  &nbsp; Front End Developer.</h1><br></br>
          I'm a passionate ReactJS developer dedicated to creating interactive and efficient web applications. With a strong foundation in front-end technologies, I strive to build user-friendly interfaces that deliver seamless and engaging experiences.
          <br></br><br></br>

          <a href="https://drive.google.com/file/d/1G39B6uMIeZyXTKW5buN2NydSTJAMi6FF/view?usp=sharing" className="button-30" download data-aos="fade-up"> Resume</a>
        </section>
      </div>
        <h1 data-aos='fade-in'>Follow <span className="colored-word">Me</span>  Here</h1>
      <section className="social-main">
        <section className="icons" data-aos="zoom-in">
          <a target="_blank" href="https://www.linkedin.com/in/muhammad-waris-saleh-30a09720b/" >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://www.instagram.com/waris_029/" >
            <img src={insta} alt="Instagram" />
          </a>
          <a target="_blank" href="https://twitter.com/Waris029" >
            <img src={twitter} alt="Twitter" />
          </a>
          <a target="_blank" href="https://web.facebook.com/Waris029/" >
            <img src={facebook} alt="Facebook" />
          </a>
        </section>
      </section>
      <section>
        <h1>
          My <span className="colored-word">Expertise</span>
        </h1>
       
      </section>
    </div>
  );
>>>>>>> bf0f868527aec6119bb8ef000f0007e07090f62a
}
export default Abt;