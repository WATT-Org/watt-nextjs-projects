import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import About from '@/pages/about';
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between items-center md:p-8 p-0  bg-gray-200 gap-4 '>
      <div className=' flex flex-col w-1/3 justify-between items-center mt-8'>
        <Image src="/images/wattlogo.png" width={100} height={100} alt='logo' className='h-auto w-auto'></Image>
        <p className='text-center md:mx-12 mx-0 font-serif text-xl text-gray-900 '>
          Our startup specializes in creating automation robots that simplify everyday tasks and make life easier.
        </p>
      </div>
      <div className=' flex flex-col  w-1/3 justify-between gap-2'>
        <p className='font-bold text-2xl text-center mt-4 text-[#0077B6]'> Links</p>
        <div className='flex flex-row justify-between md:mx-16'>
          <div className='flex  flex-row items-center '>
            <ul className='p-2 font-semibold  font-serif text-gray-800'>

              <li className='mt-4'><Link href={'/about'}>About</Link> </li>
              <Link href={'/contact'}><li className='mt-2'>Contact</li></Link>

            </ul>
          </div>
          <div className='flex  flex-row items-center  '>
            <ul className='p-2 font-semibold  font-serif text-gray-800'>

              <Link href={'/career'}> <li className='mt-4'>Careers</li></Link>
              <Link href={'/services'}> <li className='mt-2'>Services</li></Link>

            </ul>
          </div>
          <div className='flex  flex-row itmes-center  '>
            <ul className='p-2 font-semibold  font-serif text-gray-800'>

              <Link href={'/project'}> <li className='mt-4'>Projects</li></Link>
              <Link href={'/blog'}>  <li className='mt-2'>Blogs</li></Link>

            </ul>
          </div>
        </div>
      </div>
      <div className=' flex flex-col w-1/3 justify-between items-center'>
        <h2 className='text-2xl font-bold mb-12 text-[#0077B6]' >Follow Us On</h2>
        <div className='flex felx-row gap-3 text-3xl text-gray-800 justify-between'>
         <a href='#' target='_blank'><FaFacebook className='hover:text-blue-700 '/></a> 
         <a href ='https://github.com/WATT-Org'target='_blank'>   <FaGithub className='hover:text-black' /></a> 
         <a href="https://www.instagram.com/watt_india?igsh=eWFuYnZvMW01NHdm" target='_blank'>   <FaInstagram className='hover:text-rose-600' /></a> 
        <a  href='https://www.linkedin.com/company/watt-incorporate/' target='_blank'>   <FaLinkedinIn className='hover:text-blue-700' /></a> 
        </div>
      </div>
    </div>
  )
}

export default Footer;