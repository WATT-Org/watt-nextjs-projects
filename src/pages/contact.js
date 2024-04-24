import React, { useEffect, useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: '',
    phone: '',
    message: ''
  })

  function senMessage(e) {
    e.preventDefault();
    alert("Thanks for Contacting Us!")
  
    setFormData({
      firstName: document.getElementById("firstName").value,
      middleName: document.getElementById("middleName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    })
    document.getElementById("firstName").value = '';
    document.getElementById("middleName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("message").value = ''
  }
  
  useEffect(()=>{
    console.log(formData)
  },[formData])

  return (
    <div className='w-full p-12 bg-gray-300' >
      <div className='flex flex-col md:flex-row justify-between md:mx-32' data-aos="zoom-in">
        <div className='bg-gray-800 md:w-2/5 w-full flex flex-col justify-center items-center p-4 rounded'>
          <div className='flex flex-col justify-between p-4'>
            <h1 className='text-white text-4xl  font-serif '> Let's connect and  create together!</h1>
            <div className='flex flex-col  p-2'>
              <h4 className='font-semibold text-gray-200'>Our Office</h4>
              <p className='text-gray-400'>Bhopal, Madhya Pradesh, India - 462016</p>
            </div>
            <div className='flex flex-col p-2'>
              <h4 className='font-semibold text-gray-200'> Hours Of Operation </h4>
              <p className='text-gray-400'>Monday - Saturday</p>
              <p className='text-gray-400'>11:00 am - 6:00pm</p>
            </div>
            <div className='flex flex-col p-2'>
              <h4 className='font-semibold text-gray-200'> Contact Info</h4>
              <div className='flex flex-row mt-2'>
                <TfiEmail className='text-white text-2xl' />
                <p className='ml-2 text-gray-400' >wattincorporate@gmail.com</p>
              </div>
              <div className='flex flex-row mt-4'>
                <TbPhoneCall className='text-white text-3xl' />
                <p className='ml-2 text-gray-400'>+91-975-266-8589</p>
              </div>
            </div>
            <div className='flex flex-row p-2 mt-12 gap-4 text-3xl text-white '>
              <FaInstagram />
              <SlSocialLinkedin />
              <TbBrandFacebook />
              <CiTwitter />
            </div>
          </div>
        </div>
        <div className='md:w-3/5  w-full p-4 bg-white rounded'>
          <div className='p-4 flex flex-col'>
            <h1 className=' text-3xl font-serif text-center'>Let Us hear from You!</h1>
            <p className='mx-4 mt-2 md:mt-0font-semibold'>We always want to hear from you! Let us know how we
              can best help you and we'll do our very best
            </p>
            <div className='flex flex-row p-2 '>
              <form onSubmit={senMessage}>
                <div className='flex flex-col w-full p-2'>
                  <div className='flex md:flex-row flex-col '>
                    <div className='flex flex-col  mx-4 md:w-1/3'>
                      <label htmlFor='firstName' className='w-full font-semibold'>First Name</label>
                      <input id="firstName" type='text' required className='w-full mt-2 hover:bg-gray-400  border-x-0 border-t-0 h-8 p-2
                         border-2 border-b-black' />
                    </div>
                    <div className='flex flex-col mt-4 md:mt-0 mx-4 md:w-1/3'>
                      <label htmlFor='middleName' className='font-semibold'>Middle Name</label>
                      <input id="middleName" type="text" className='w-full  hover:bg-gray-400 h-8 mt-2 border-x-0 border-t-0 p-2 border-2 border-b-slate-800' />
                    </div>
                    <div className='flex flex-col mt-4 md:mt-0 mx-4 md:w-1/3'>
                      <label className='font-semibold' htmlFor='lastName'>Last Name</label>
                      <input id="lastName" type='text' className='w-full  hover:bg-gray-400  h-8 mt-2 border-x-0 border-t-0 p-2 border-2 border-b-black' />
                    </div>
                  </div>
                  <div className='flex md:flex-row flex-col p-4   md:mt-4'>
                    <div className='flex flex-col md:mt-4 mt-2  md:w-1/2 '>
                      <label className='font-semibold ' htmlFor='email'>Email</label>
                      <input id='email' type='email' className='border-2 border-b-black border-x-0 hover:bg-gray-400 border-t-0 p-2 mt-2 h-8' />
                    </div>
                    <div className='flex flex-col md:w-1/2 md:ml-4 mt-4'>
                      <label className='font-semibold' htmlFor='phone'>Phone</label>
                      <input type='phone' id="phone" required className='border-2 border-b-black  border-x-0 p-2 border-t-0 hover:bg-gray-400 mt-2 h-8' />
                    </div>
                  </div>
                  <div className='flex flex-col p-4 mt-2 w-full'>
                    <label className='font-semibold' htmlFor='message'>Message</label>
                    <textarea id="message" rows={4} maxLength={300}
                      className='border-2 border-b-black  border-x-0 border-t-0 mt-2 hover:bg-gray-400'>
                    </textarea>
                  </div>
                  <div className='p-4 mt-4 '>
                    <button className='bg-gray-600 rounded md:w-1/3 h-10 p-2 md:p-0 text-white font-bold' type='submit'>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;