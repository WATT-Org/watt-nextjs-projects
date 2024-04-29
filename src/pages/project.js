import React, { useState } from 'react';
import Image from 'next/image';

function Project(){
  // State for active tabs
  const [activeTab, setActiveTab] = useState(1);
  const projects = [{
    id: 1,
    image: "/images/RoomAutomationproject.png",
    projectName: "Room Automation Solutions",
    projectDesc: "Transform your home into a smart home with room automation solutions.Imagine being able to control the lighting, temperature, and appliances in your home with just the touch of a button or voice command. These solutions not only  provide convenience, but can also improve energy efficiency and overall safety. With the ability to program and schedule events, you can ensure your home is always at the perfect temperature when you arrive and appliances are  turned off when not in use. Upgrade your home and take control with room automation solutions",

  },
  {
    id: 2,
    image: "/images/MedicalProduct.png",
    projectName: "Medical Application Products/Solutions",
    projectDesc: "Medical applications and products have been revolutionizing the healthcare industry by providing new and innovative ways to diagnose, treat, and care for patients. From robotic wheelchairs that empower mobility for those with physical disabilities, to telemedicine platforms that connect patients with medical professionals remotely, these advancements have greatly improved the quality of care and accessibility for patients.",

  },
  {
    id: 3,
    image: "/images/RoboticsProject.png",
    projectName: "Custom Robotic Projects",
    projectDesc: "Custom robotic projects are pushing the boundaries of what is possible in various industries, from manufacturing to healthcare. These projects involve the design and development of unique robotic systems tailored to meet specific needs and requirements. They allow companies to automate complex tasks, increase efficiency and productivity, and improve overall performance. With the integration of cutting-edge technology, custom robotic projects are unleashing innovation and driving industry advancement",

  },
  {
    id: 4,
    image: "/images/WorkPlaceAutomation.png",
    projectName: "Workplace Automation",
    projectDesc: "Workplace automation is the implementation of technology to automate repetitive, routine or dangerous tasks in the workplace. The integration of automation technology in various industries is leading to increased efficiency, improved productivity and cost savings. From manufacturing to retail, automation is changing the way businesses operate and leading to a more efficient and streamlined workflow.",

  }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto md:flex-col flex-row  justify-center itmes-center bg-gray-300 p-4">
      <ul className="flex mb-3 justify-center p-8" role="tablist">
        {projects.map((projectData)=>{
          return  <li className="mr-1" key={projectData.id}>
          <button 
            className={`${activeTab === projectData.id ? 'bg-blue-500' : 'bg-gray-500'
              } text-white md:py-2 md:px-4  focus:outline-none`}
            onClick={() => handleTabClick(projectData.id)}
          >
            {projectData.projectName}
          </button>
        </li>
        })}
      </ul>
      <div className="md:p-4 ">
        {/* Render content based on active tab */}

       {projects.map((projectData)=>{
        return <div className='rounded' key={projectData.id}>
           {activeTab === projectData.id && (
          <div className='flex flex-col items-center md:mx-24 rounded-lg  bg-gray-900'>

            <div className='flex flex-col  md:flex-row md:p-16 p-8' >
              <Image src={projectData.image} width={1080} height={566}  className='md:w-1/3 border h-auto' alt="projectsImage" />
              <div className='items-center flex flex-col'>
                <h1 className="text-3xl text-white font-bold">{projectData.projectName}</h1>
                <h2 className='text-sm font-semibold text-gray-300 text-cemter md:p-8 md:mx-4'>{projectData.projectDesc}</h2>
                <button className='underline text-blue-200'>Know more</button>
              </div>
            </div>
          </div>
        )}
        </div>
       })}

      </div>
    </div>
  );
};


export default Project;