import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const Project = () => {
  return (
    <div className='bg-gray-600 w-full '>
      <div className='flex flex-col justify-center p-2'>
        <div className='text-center text-4xl text-gray-200 md:p-16 p-8 font-bold '>
          <p>Our Projects That Show Our Expertise On</p>
          <p>Robotics And Home Automations</p>
        </div>
        <div className='grid grid-rows-2  items-center bg-gray-800 md:mx-32 mx-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 ronded-l-md max-h-full hover:border-0 border-b-whhite border-2 border-x-0 border-t-0'>
            <div className='flex felx-col h-max p-5  hover:rounded bg-gray-800 hover:bg-gray-700'>
              <div className='flex flex-col max-h-full'>
                <Image src="/RoomAutomationproject.png" height={566} width={1080} alt='roomAutomstion' className='w-full h-full' />
                <h1 className='text-3xl text-gray-100 font-bold mt-4'>Room Automation Solutions</h1>
                <p className='text-gray-400 mt-2'>Transform your home into a smart home with room automation solutions. Imagine being able to control the lighting,
                  temperature, and appliances in your home with just the touch of a button or voice command. These solutions not only
                  provide convenience, but can also improve energy efficiency and overall safety. With the ability to program and
                  schedule events, you can ensure your home is always at the perfect temperature when you arrive and appliances are
                  turned off when not in use. Upgrade your home and take control with room automation solutions
                </p>
                <button className='text-blue-300 underline  underline-offset-4 p-2  '>
                  <Link href='/contact'>Know More</Link>
                </button>
              </div>
            </div>
            <div className='flex felx-col h-max p-5  hover:rounded bg-gray-800 hover:bg-gray-700 '>
              <div className='flex flex-col max-h-full'>
                <Image src="/MedicalProduct.png" height={566} width={1080} alt='roomAutomstion' className='w-full h-full' />
                <h1 className='text-3xl text-gray-100 font-bold  mt-4  '>Medical Application Products/ Solutions</h1>
                <p className='text-gray-400 mt-2 '>Medical applications and products have been revolutionizing the healthcare industry
                  by providing new and innovative ways to diagnose, treat, and care for patients. From robotic wheelchairs that
                  empower mobility for those with physical disabilities, to telemedicine platforms that connect patients with
                  medical professionals remotely, these advancements have greatly improved the quality of care and accessibility for patients.
                </p>
                <button className='text-blue-300 underline  underline-offset-4 p-2 mt-2 mb-4 '>
                  <Link href='/contact'>Know More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 ronded-l-md max-h-full '>
            <div className='flex felx-col max-h-full p-5  hover:rounded bg-gray-800 hover:bg-gray-700  '>
              <div className='flex flex-col max-h-full'>
                <Image src="/RoboticsProject.png" height={566} width={1080} alt='roomAutomstion' className='w-full h-auto' />
                <h1 className='text-3xl text-gray-100 font-bold mt-4'>Custom Robotic Projects</h1>
                <p className='text-gray-400 mt-2'>Custom robotic projects are pushing the boundaries of what is possible in various
                  industries, from manufacturing to healthcare. These projects involve the design and development of
                  unique robotic systems tailored to meet specific needs and requirements. They allow companies to automate
                  complex tasks, increase efficiency and productivity, and improve overall performance. With the integration
                  of cutting-edge technology, custom robotic projects are unleashing innovation and driving industry advancement
                </p>
                <button className='text-blue-300 underline  underline-offset-4 p-2  '>
                  <Link href='/contact'>Know More</Link>
                </button>
              </div>
            </div>
            <div className='flex felx-col h-max p-5  hover:rounded bg-gray-800 hover:bg-gray-700 '>
              <div className='flex flex-col max-h-full'>
                <Image src="/WorkPlaceAutomation.png" height={566} width={1080} alt='roomAutomstion' className='w-auto h-auto' />
                <h1 className='text-3xl text-gray-100 font-bold mt-4  '>Workplace Automation</h1>
                <p className='text-gray-400 mt-2'>Workplace automation is the implementation of technology to automate repetitive,
                  routine or dangerous tasks in the workplace. The integration of automation technology in various industries is
                  leading to increased efficiency, improved productivity and cost savings. From manufacturing to retail,
                  automation is changing the way businesses operate and leading to a more efficient and streamlined workflow.
                </p>
                <button className='text-blue-300 underline  underline-offset-4 p-5  '>
                  <Link href='/contact'>Know More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project;