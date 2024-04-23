import React from 'react'
import { FaFacebook,FaInstagram ,FaTwitter,FaGithub,FaLinkedinIn} from "react-icons/fa";
import Career from './career';

const About = () => {
  return (
    <div className='flex flex-col bg-black text-white p-6 justify-between items-center justify-center ' data-aos ="fade-up" >
    <div className='flex flex-col' >
      <div className='flex flex-col md:p-28  items-center'data-aos ="fade-up"  >
        <div className='flex flex-col itmes-center text-center ' data-aos="fade-up">
          <h1 className='text-5xl font-bold my-10  md:mx-2  hover:font-serif text-gray-200 md:hover:text-cyan-200 ' data-aos="fade-up" dat-aos-delay="1000"> About Us</h1>
          <p className='md:mx-10 md:py-4 md:px-4  md:mx-2 mb-6 text-gray-400 text-xl text-center '>
            WATT (World of Automation Technology & Trainings) is a robotics based company which uses emerging technologies like IOT, AI,
            Data Science, etc. to solve real world problems and automate the work that humans have to do repeatedly.
            As of now we have presented many Automation concepts for Industrial Automation. Automated Appliances like Automatic Curtains,
            Room Automation, Hospital Automation, Drone, Alarms are some of our main projects.</p>
        </div>
        <div className='flex flex-col justify-between justify-center p-8' data-aos ="fade-right">
          <h1 className='text-2xl text-gray-200 text-center ' 
         
          >
            Follow us on </h1>
          <div className='flex flex-row mt-8 text-4xl mx-0 text-cyan-200 ' data-aos ="fade-left"
                     data-aos-delay="100"
          >
            <a href='#' target='_blank'><FaFacebook /></a>
            <a href="https://www.instagram.com/watt_india?igsh=eWFuYnZvMW01NHdm" target='_blank'><FaInstagram className='mx-4' /></a>
            <a href='#' target='_blank'><FaTwitter /></a>
            <a href='https://github.com/WATT-Org' target='_blank'><FaGithub className='mx-4' /></a>
            <a href='https://www.linkedin.com/company/watt-incorporate/' target='_blank'> <FaLinkedinIn /></a>

          </div>
        </div>
      </div>
      <hr className='mx-32' data-aos ="fade-up" />
      <div className='md:mx-32 mt-8' data-aos ="zoom-in-up">
        <Career/>
      </div>
          
    </div>
  </div>
  )
}

export default About;