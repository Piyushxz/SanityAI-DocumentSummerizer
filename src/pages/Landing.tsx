import { Navbar } from "../components/Navbar"
import Features from "../components/Featurs"
import {motion, useMotionValueEvent, useScroll} from "motion/react"
import Aboutus from "../components/Aboutus"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTransform } from "motion/react";

export const Landing = () => {
  const navigate = useNavigate()
  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({target:targetRef,
    offset:["center","end start"],
    axis:"y"
  }) 


  useMotionValueEvent(scrollYProgress,"change",(latest)=>console.log(latest))
  const pos = useTransform(scrollYProgress,[0,1],["0px","470px"])
    return (
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.65,
              visualDuration: 0.5,
            }}
            className="w-full md:w-1/2 text-center"
          >
            <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-7xl text-white">
              Document{" "}
              <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
                Summerizer
              </span>{" "}
              Using RAG.
            </h1>
            <h3 className="font-primary tracking-tighter font-bold text-md md:text-xl mt-4 text-white opacity-80">
              Summarize.Chat.And More
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.65,
              visualDuration: 0.5,
            }}
            className="mt-6"
          >
            <button
              onClick={() =>navigate('/login')}
              className="inline-flex font-primary tracking-tighter items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8"
            >
              Start Now
            </button>
          </motion.div>
        </div>
  
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{
              duration: 0.3,
              delay: 0.9,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.65,
              visualDuration: 0.5,
            }}
            className="flex justify-center overflow-hidden"
          >
            <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-6xl text-white">
              Features
            </h1>
          </motion.div>
          <Features />

          <div className="w-full flex justify-center my-[300px] ">
          
              <h1 className="font-primary tracking-tighter font-extrabold text-3xl md:text-5xl text-white">Summarize.Chat.And More</h1>
            

          </div>
          <div className="w-full flex justify-center my-24 ">
          
              <h1 className="font-primary tracking-tighter font-extrabold text-3xl md:text-5xl text-white">How it works</h1>
            

          </div>

          <div className="w-full flex justify-center items-center  ">
          
            
            <div className="h-[60vh]  md:h-[80vh] bg-[#191919] w-1 rounded-lg">
             <motion.span
            ref = {targetRef}
             style={{y:pos


             }}
            
            className="h-30  w-1 mb-[500px] absolute rounded-lg bg-gradient-to-b from-blue-400 to-blue-700  rounded-full drop-shadow-xl shadow-[0_0_30px_3px_rgba(0,123,255,0.8)]">

              
            </motion.span> 
            </div>
 

        </div>
          <div id="about-us">
            <Aboutus />
          </div>

          
        </div>
      </div>
    );
  };