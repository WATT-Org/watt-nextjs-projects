import React from 'react'

const Career = () => {
    return (
        <div className='flex flex-col justify-between items-center bg-gray-600 '>
            <div className='flex flex-col items-center p-8 md:p-16'>
                <h1 className='text-4xl  text-gray-100 font-bold '>Career</h1>
            </div>
            <div className='text-center md:mx-36 mx-4  text-2xl text-gray-400'>
                <p>
                    We at WATT are passionate group of peoples who are experienced in different 
                    domains like Robotics,Web Development, Data Science, Machine Learning and
                     Artificial Intelligence.You can also join us in building this amazing organisation. 
                     Be a Part of the journey that affect a Million Lives.
                </p>
            </div>  
            <div className='items-center  text-xl text-gray-200 p-8 '>
                <p className='font-serif'>Be A Part Of A Journey That  Will  Affect The Million Lives</p>
            </div>

            <div className='text-center text-gray-200 text-xl md:mx-36 p-2'>
                <p>
                    Currently we are open to hire new interns for the role of Web Developers(Both Frontend and Backend),
                     Data entry(Excel), Data Science, Machine learning interns.
                </p>
            </div>
            <div className='flex items-center p-6 font-bold text-gray-200  '>
                <button className=' border-white border-2 p-1 hover:bg-white rounded hover:text-indigo-800'>
                    ENQUIRE
                </button>
                <button className='ml-8 border-white border-2 p-1 hover:bg-white rounded hover:text-indigo-800'>
                    APPLY NOW
                </button>
            </div>
        </div>
    )
}

export default Career;