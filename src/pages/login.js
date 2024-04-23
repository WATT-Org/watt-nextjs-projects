import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Login = () => {
    const emailText = useRef()
    const passwordText = useRef()
    const [data, setData] = useState({
        email: '',
        password: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        setData({ email: emailText.current.value, password: passwordText.current.value })
        emailText.current.value = '';
        passwordText.current.value = '';
    }
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className=' flex min-h-full items-center justify-center py-16 px-4 sm:px-6 lg:px-8 flex-col box-border h-98 bg-gray-600 '>
            <div className='bg-white  w-full max-w-md rounded-lg'>
                <div className='flex justify-center item-center mt-4  '>
                    <span>
                        <Image src={'/WattLogo.png'} height={100} width={100} alt='watt-logo'
                            className='object-center md-object-top w-auto h-auto ' priority={true} />
                    </span>
                </div>
                <div className='mt-16 text-center'>
                    <span>
                        or<Link href={'/signup'} className='ml-4 text-[#0077B6] font-bold hover:text-gray-600 '>SignUp</Link>
                    </span>

                </div>
                <form onSubmit={handleSubmit} >
                    <div className='flex flex-col p-6 '>
                        <div className='flex flex-col '>
                            <lable className='font-bold' htmlFor='emailBox'> Email</lable>
                            <input type='email' placeholder='Email Address' id="emailBox" className='h-8 border-2 p-2  rounded-lg mt-2'
                                ref={emailText} required/>

                        </div>
                        <div className='flex flex-col mt-2'>
                            <lable className="font-bold" htmlFor="password">Password</lable>
                            <input type='password' placeholder='Password' id="password" className='h-8 border-2 p-2 rounded-lg mt-2'
                                ref={passwordText} required>

                            </input>
                        </div>
                        <div className='flex flex-row mt-4'>
                            <input id="acceptTerms" type='checkbox' className='h-6 w-8 rounded-lg' />
                            <label htmlFor="acceptTerms" className="ml-2 text-[#0077B6]">Remember Me</label>
                            <span className='ml-20 text-indigo-800'><Link href={'/forgotPw'}>Forgot your password?</Link></span>
                        </div>
                        <button type="submit" className='mt-4 bg-[#0077B6] h-8 rounded-lg text-white font-bold'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;