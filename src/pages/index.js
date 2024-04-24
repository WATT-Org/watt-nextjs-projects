import Image from "next/image";
import { Inter } from "next/font/google";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";
// import backgroundImage from "../../public/homeBg.png"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-100 w-full  flex flex-col w-full ">
      <div className="flex flex-col text-center items-center justify-center p-8 md:p-8 mt-24 " data-aos="fade-up">
        <h3 className="text-xl font-sans font-bold tracking-wide" >WELCOME TO WORLD OF ROBOTICS</h3>
        <h1 className="text-4xl py-4 text-center font-sans text-gray-700 font-bold ">
          Fast And Efficient Robotics Service
        </h1>
        <p className="text-center  mx-2 md:mx-24 md:p-8 p-4 ">WATT (World of Automation Technology & Trainings) is a robotics based
          company which uses emerging technologies like IOT,
          AI, Data Science, etc. to solve real world problems and automate the work that humans have to do repeatedly.
        </p>
        <div className="itmes-center p-2" data-aos="zoom-in-up">
          <button className="h-10 bg-gray-800  text-white w-28 rounded animate-bounce"> Get Started</button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-between items-center bg-blur-sm" data-aos="fade-up">
        <div className="flex flex-col justify-between items-center md:p-4 mx-8 my-32">
          <p className="text-blue-900 text-2xl mx:2 md:mx-8 font-bold" data-aos="fade-right">#Robotics</p>
          <div className="text-3xl text-gray-800 md:mt-4 md:mx-8  font-bold p-4 items-center">
            <p className="" data-aos="fade-up">
              WATT uses emerging technologies like IOT, AI, Data Science, etc.
            </p>
          </div>
          <p className="mt-8 mx-2 md:mx-24 text-center" data-aos="fade-up">
            WATT (World of Automation Technology & Trainings) is a robotics based company which uses
            emerging technologies like IOT,AI, Data Science, etc. to solve real world problems and automate
            the work that humans have to do repeatedly.As of now we have presented many Automation concepts
            for Industrial Automation. Automated Appliances like Automatic Curtains, Room Automation,
            Hospital Automation,Drone, Alarms are some of our main projects.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:mx-28 " data-aos="zoom-in">
          <div className="flex flex-col justify-between itmes-center">
            <div className="flex flex-col justify-between itmes-center md:mx-8 mx-8 hover:animate-pulse" data-aos="zoom-in">
              <FaRobot className="text-5xl text-gray-900 " />
              <div className="flex flex-row mt-2">
                <p className=" text-xl ">Use  our</p>
                <p className="text-xl ml-2 font-bold text-gray-900"> autonomous robots</p>
              </div>

              <p className="mt-2">Automated Appliances like Automatic Curtains, Room Automation, Hospital Automation, Drone,
                Alarms are someof our main projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between itmes-center mt-4 md:mt-0">
            <div className="flex flex-col justify-between itmes-center mx-8">
              <FaRobot className="text-5xl text-gray-900 " />
              <div className="flex flex-row mt-2 text-xl">
                <p >Bring your own </p>
                <p className="ml-2 text-gray-900 font-bold"> Robots and Machines</p>
              </div>
              <p className="mt-2">You can automate your place by installing our automated products like Automatic Curtains,
                Room Automation, Hospital Automation etc</p>
            </div>
          </div>
          <div className="flex flex-col justify-between itmes-center mt-4 md:mt-0">
            <div className="flex flex-col justify-between itmes-center mx-8">
              <FaRobot className="text-5xl text-gray-900 " />
              <div className="text-xl flex flex-row mt-2">
                <p>Connect your</p>
                <p className="ml-2 text-gray-900 font-bold ">Smart Devices</p>
              </div>
              <p className="mt-2">All our devices are smart by nature. They support wireless connectivity across various
                handheld devices and over internet networks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center md:p-24 p-8 " data-aos="fade-right">
        <p className="text-indigo-900 text-lg font-bold">#Experience </p>

        <p className="text-3xl font-bold text-gray-800 flex flex-col items-center md:p-8 p-4" data-aos="fade-right">
          Our Projects that show our expertise on robotics and home automations
        </p>

        <p className="items-center md:mx-24 mx-4" data-aos="fade-right">
          Our startup specializes in creating automation robots that
          simplify everyday tasks and make life easier for both individuals and businesses. These robots are designed
          to increase efficiency, reduce the workload and free up time for more important activities. They can be used
          in various industries, such as manufacturing,logistics,and healthcare, to automate repetitive, time-consuming
          tasks and improve overall productivity. Our robots are user-friendly, easy to operate and customizable to meet
          the specific needs of our clients. With our automation robots, we aim to make a meaningful impact on people's
          lives by reducing stress and increasing productivity
        </p>
        <div className=" text:gray-800 hover:text-indigo-800 " data-aos="zoom-in-up" >
          <Link href='/project' className=" underline hover:no-underline  font-bold text-xl" > Explore more of our projects -&gt;
          </Link>

        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center w-full " data-aos="fade-up">
        <div className="grid grid-rows-2 gap-1 items-center ">
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-24 mx:8 items-center p-4 ">
            <div className="bg-gray-600 flex flex-col items-center rounded-lg p-8" data-aos="fade-right">
              <h1 className="text-xl font-bold text-gray-100 text-center">
                Revolutionize Your Home with Room Automation Solutions
              </h1>
              <p className="p-2 text-gray-200">Transform your home into a smart home with room automation solutions. Imagine being able to control the lighting,
                temperature, and appliances in your home with just the touch of a button or voice command.
                These solutions not only provide convenience, but can also improve energy efficiency and overall safety.
                With the ability to program and schedule events, you can ensure your home is always at the perfect temperature
                when you arrive and appliances are turned off when not in use. Upgrade your home and take control with room
                automation solutions.
              </p>
              <Image src={'/RoomAutomation.png'} width={1080} height={566} alt="Room Automation" className="p-2"></Image>
            </div>
            <div className="bg-gray-600 flex flex-col items-center md:ml-2 mt-2 md:mt-16 rounded-lg p-8" data-aos="fade-left">
              <h1 className="text-xl font-bold text-gray-100  text-center">
                Revolutionize Your Home with Room Automation Solutions
              </h1>
              <p className="p-2 text-gray-200">Transform your home into a smart home with room automation solutions. Imagine being able to control the lighting,
                temperature, and appliances in your home with just the touch of a button or voice command.
                These solutions not only provide convenience, but can also improve energy efficiency and overall safety.
                With the ability to program and schedule events, you can ensure your home is always at the perfect temperature
                when you arrive and appliances are turned off when not in use. Upgrade your home and take control with room
                automation solutions.
              </p>
              <Image src={'/Robotics.png'} width={1080} height={566} alt="Room Automation" className="p-2"></Image>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-24 mx:8 items-center p-4 ">
            <div className="bg-gray-600 flex flex-col items-center rounded-lg p-8" data-aos="fade-right">
              <h1 className="text-xl font-bold text-gray-100 text-center">
                Revolutionize Your Home with Room Automation Solutions
              </h1>
              <p className="p-2 text-gray-200">Transform your home into a smart home with room automation solutions. Imagine being able to control the lighting,
                temperature, and appliances in your home with just the touch of a button or voice command.
                These solutions not only provide convenience, but can also improve energy efficiency and overall safety.
                With the ability to program and schedule events, you can ensure your home is always at the perfect temperature
                when you arrive and appliances are turned off when not in use. Upgrade your home and take control with room
                automation solutions.
              </p>
              <Image src={'/RoomAutomation.png'} width={1080} height={566} alt="Room Automation" className="p-2"></Image>
            </div>
            <div className="bg-gray-600 flex flex-col items-center md:ml-2 mt-2 md:mt-16 rounded-lg p-8" data-aos="fade-left">
              <h1 className="text-xl font-bold text-gray-100  text-center">
                Revolutionize Your Home with Room Automation Solutions
              </h1>
              <p className="p-2 text-gray-200">Transform your home into a smart home with room automation solutions. Imagine being able to control the lighting,
                temperature, and appliances in your home with just the touch of a button or voice command.
                These solutions not only provide convenience, but can also improve energy efficiency and overall safety.
                With the ability to program and schedule events, you can ensure your home is always at the perfect temperature
                when you arrive and appliances are turned off when not in use. Upgrade your home and take control with room
                automation solutions.
              </p>
              <Image src={'/Robotics.png'} width={1080} height={566} alt="Room Automation" className="p-2"></Image>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col p-16 items-center " data-aos="fade-up">
        <div className="flex flex-col items-center justify-between"  >
          <p className="text-indigo-700 "  >#WHAT EXPERTS SAY ABOUT US</p>
          <h1 className="text-3xl text-gray-800 font-bold p-2">The best of the trust in WATT</h1>
          <p className="text-center md:mx-36 ">
            Our startup offers informative blogs on automation technology, with tips and insights on implementation, trends,
            and successful case studies. These resources aim to educate and help readers make informed decisions on how to
            incorporate automation in their field.
          </p>
        </div>
      </div>

    </div>
  );
}
