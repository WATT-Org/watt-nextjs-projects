import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

function SignUp(){
  const firstNameText = useRef()
  const lastNameText = useRef()
  const emailText = useRef()
  const passwordInput = useRef()
  const rePasswordInput = useRef()
  const [userData, setUserData] = useState({
    firstName:"",
    lastName: '',
    email: "",
    password: '',
    rePassword:''
  })
 function signUpform(e){
      e.preventDefault();
   setUserData(
    {
      firstName:firstNameText.current.value,
      lastName: lastNameText.current.value,
      email: emailText.current.value,
      password: passwordInput.current.value,
      rePassword:rePasswordInput.current.value
    })
    firstNameText.current.value ='';
    lastNameText.current.value = '';
    emailText.current.value = '';
    passwordInput.current.value = '';
    rePasswordInput.current.value ='';

 }
 useEffect(()=>{
  console.log(userData)
 },[userData])
 

  return (
    <div className=' flex min-h-full items-center justify-center py-16 px-4 sm:px-6 lg:px-8 flex-col box-border h-98 bg-gray-800 '>
        <div className='bg-white  w-full max-w-md rounded-lg'>
        <div className='flex justify-center item-center mt-4  '>
        <span>   
          <Image src={'/WattLogo.png'} height={100} width={100} alt='watt-logo' className='object-center md-object-top w-auto h-auto '/>
        </span>
        </div>
        <div className='mt-12 text-center'>
        <span>
          or<Link href={'/login'} className='ml-4 text-[#0077B6] font-bold '>Sign In</Link>
        </span>
   
      </div>
            <form onSubmit ={signUpform}>
             <div className='flex flex-col p-4 gap-x-2'>
                <div className='flex flex-col md:flex-row gap-y-2'>
                    <input type = "text" placeholder='First Name*' ref ={firstNameText} className='h-8 rounded-lg border-2 p-2 ' required/>
                    <input type ="text" placeholder='Last Name' ref ={lastNameText} className='h-8 md:ml-4 mt:2 md:mt-0 border-2 rounded-lg p-2'/>
                </div>
                <div className='mt-4 w-full'>
                    <input type = "text" placeholder='Email*' ref ={emailText} className='h-8 rounded-lg border-2 p-2 w-full'required/>
                    
                </div>
                <div className='mt-4'>
                    <input type = "password" placeholder='Password*' ref = {passwordInput} className='h-8 rounded-lg border-2 p-2 w-full' required/>
                    
                </div>
                <div className='mt-4'>
                    <input type = "password" placeholder='Re-Inter Password*' ref = {rePasswordInput} className='h-8 rounded-lg border-2 p-2 w-full' required/>
                  
                </div>
                <div className='mt-4 ml-2'>
                    <span>Already have acount?<Link href ={'/login'}className='text-[#0077B6] font-bold'>Login</Link></span>
                </div>
                <button type = "submit" className='mt-4 h-8 bg-[#0077B6] mt-4 rounded-lg text-white font-bold' >Sign Up</button>
             </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;