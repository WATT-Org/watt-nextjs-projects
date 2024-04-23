import "@/styles/globals.css";
import Navbar from "@/component/navbar";
import {React,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/component/footer";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return <>
    <Navbar />
    <Component {...pageProps} /> 
    <Footer/>
  </>
}
