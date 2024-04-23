import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars,FaWindowClose } from "react-icons/fa";


const Navbar = () => {

  const [isOpen,setIsopen] = useState(false)
  function toggleButton(){
    setIsopen(!isOpen);
  }
  return (
    <nav className='flex flex-row items-center justify-between bg-white p-2  '>
      <div className='flex flex-col items-center mx-4  mt-2'>
      <Link href={'/'}>  <Image src={'/WattLogo.png'} height={100} width={100} alt ={'watt-logo'} className='h-auto w-auto ' priority={true} />
      </Link>
      </div>
      <div className='hidden md:block '>
      <ul className='flex flex-row text-xl   '>

        <li className='mx-8 font-bold hover:text-[#0077B6]'>
          <Link href={'/'}> Home</Link>
        </li>
        <li className='mx-8 font-bold hover:text-[#0077B6]' >
          <Link href={'/about'}> About</Link>
        </li>
        <li className='mx-8 font-bold hover:text-[#0077B6]'>
          <Link href={'/contact'}> Contact</Link>
        </li>
        <li className='mx-8 font-bold hover:text-[#0077B6]'>
          <Link href={'/blog'}> Blog</Link>
        </li>
        <li className='mx-8 font-bold hover:text-[#0077B6]'>
          <Link href={'/project'}> Project</Link>
        </li>
        <li className='mx-8 font-bold hover:text-blue-700'>
          <button className=' bg-gray-400  h-8 mx-2 hover:bg-gray-600 rounded'>
            <Link href={'/login'} className='p-2 mx-2 hover:text-[#0077B6]'> Login</Link></button>
        </li>

      </ul>
      </div>
      <div className='md:hidden'>
        <button  onClick={toggleButton}>
         {isOpen?<FaWindowClose className='text-4xl'/>:<FaBars className='text-4xl'/>}
           </button>
           </div>
      {/* {isOpen && (
        <div className=''>
       
        <ul className='flex flex-col text-xl  '>
  
          <li className='mx-8 font-bold hover:text-[#0077B6]'>
            <Link href={'/'}> Home</Link>
          </li>
          <li className='mx-8 font-bold hover:text-[#0077B6]' >
            <Link href={'/about'}> About</Link>
          </li>
          <li className='mx-8 font-bold hover:text-[#0077B6]'>
            <Link href={'/contact'}> Contact</Link>
          </li>
          <li className='mx-8 font-bold hover:text-[#0077B6]'>
            <Link href={'/blog'}> Blog</Link>
          </li>
          <li className='mx-8 font-bold hover:text-[#0077B6]'>
            <Link href={'/project'}> Project</Link>
          </li>
          <li className='mx-8 font-bold hover:text-blue-700'>
            <button className=' bg-gray-400  h-8 mx-2 hover:bg-gray-600 rounded'>
              <Link href={'/'} className='p-2 mx-2 hover:text-[#0077B6]'> Login</Link></button>
          </li>
  
        </ul>
        </div>
       
      ) }
      */}
    </nav>
  )
}

export default Navbar;