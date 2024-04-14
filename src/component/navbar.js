import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between bg-gray-800 p-6 text-white'>
      <div className='flex flex-row items-center  '>
        <Image src={'/wattlogo.png'} height={60} width={60}/>
        <h1 className='mx-4 text-4xl font-bold'>WATT</h1>
      </div>
      <div className='hidden md:block'>
      <ul className='flex flex-row  text-white '>

        <li className='mx-8'>
          <Link href={'/'}> Home</Link>
        </li>
        <li className='mx-8' >
          <Link href={'/about'}> About</Link>
        </li>
        <li className='mx-8'>
          <Link href={'/contact'}> Contact</Link>
        </li>
        <li className='mx-8'>
          <Link href={'/blog'}> Blog</Link>
        </li>
        <li className='mx-8'>
          <Link href={'/project'}> Project</Link>
        </li>
        <li className='mx-8'>
          <Link href={'/'}> Blog</Link>
        </li>

      </ul>
      </div>
      <div className='md:hidden'>
        <button  onClick={()=>(alert(hello))}>Click me </button>
      </div>
    </nav>
  )
}

export default Navbar;