import React from "react";
import { image } from "../data/data";

function About() {
  return ( 
  <div id='about'>
    <h2>About Me</h2>
    <p>
    I'm from a small mountain town in Colorado. My previous experience includes design and 
    implementation of large-scale commercial audio visual systems, and cybersecurity threat analysis/asset management for 
    fortune 500 companies around the globe. From a very young age I've been inspired to innovate
    and inspire positive change in the quality of everyday life using technology as my medium. I pride myself in my ability 
    to inspire teamwork, communicate well, and bring strong positive energy into every role I take. 
    </p>
    <img src = {image} alt='I made this.'/>
  </div>
  )
}

export default About;
