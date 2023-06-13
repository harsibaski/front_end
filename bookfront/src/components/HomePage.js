import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import video from "../Assests/video.mp4"
import Navbar from './Navbar';
import Login from './Login.js';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="homepage">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className='textt'>Books are a uniquely </h1>
        <h1 className='textt'>portable magic </h1>
        
        
        <Link to="/signup">
        <button className='button_hover'><span className='buttonm_hover'></span ><span ></span><span></span><span ></span>
  Read More.
</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomePage;
