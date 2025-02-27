import { Navbar } from "../components/Navbar"
import Features from "../components/Featurs"
import {motion, useMotionValueEvent, useScroll} from "motion/react"
import Aboutus from "../components/Aboutus"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTransform } from "motion/react";
import SearchFolderIcon from "../components/icons/SearchFolderIcon";
import UploadFolderIcon from "../components/icons/UploadFolder";
import MessagesIcon from "../components/icons/MessagesIcon";
import { VideoIcon } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate()
  const targetRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const iconRef2 = useRef<HTMLDivElement>(null)

  const iconRef3 = useRef<HTMLDivElement>(null)


  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center", "end start"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress } = useScroll({
    target: iconRef,
    offset: ["center", "start center"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress2 } = useScroll({
    target: iconRef2,
    offset: ["center", "start"],
    axis: "y",
  });
  
  const { scrollYProgress: iconScrollYProgress3 } = useScroll({
    target: iconRef3,
    offset: ["center", "end start"],
    axis: "y",
  });
  



  useMotionValueEvent(sectionScrollYProgress,"change",(latest)=>console.log(latest))
  const pos = useTransform(sectionScrollYProgress,[0,1],["0px","55vh"])
  const col = useTransform(iconScrollYProgress,[0,1],["#191919","#3B82F6"])
  const col2 = useTransform(iconScrollYProgress2,[0,1],["#191919","#3B82F6"])

  const col3 = useTransform(iconScrollYProgress3,[0,1],["#191919","#3B82F6"])



    return (
      <div className="overflow-x-hidden  ">
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
            <h1 className="font-primary tracking-tighter font-extrabold text-5xl md:text-7xl text-white">
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
              duration: 1.5,
              delay: 0.7,
              ease: "easeInOut",
              type: "spring",
              bounce: 1,
              stiffness:150,
            }}
            className="mt-6 flex gap-4"
          >
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/login')}
        className="inline-flex font-primary tracking-tighter items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-10"
      >
        Start Now
      </motion.button>
      <motion.button
    
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://youtu.be/47pB5RoGcyo')}

        className="inline-flex font-primary flex gap-2 tracking-tighter items-center justify-center bg-white  to-blue-700 text-black font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-10"
      >
        <VideoIcon/>
        Watch Video
      </motion.button>

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

          <div className="w-full flex justify-center my-[400px] ">
          
              <h1 className="font-primary tracking-tighter font-extrabold text-3xl md:text-5xl text-white">Summarize.Chat.And More</h1>
            

          </div>
          <div className="w-full flex justify-center my-24 ">
          
              <h1 className="font-primary tracking-tighter font-extrabold text-3xl md:text-5xl text-white">How it works</h1>
            

          </div>

          <div className="w-full flex justify-center  ">
          
            
            <div className="h-[70vh] md:h-[50vh] lg:h-[70vh]  bg-[#191919] w-1 rounded-lg">
             <motion.span
            ref = {targetRef}
             style={{y:pos


             }}
            
            className="h-30  w-1 mb-[500px] absolute rounded-lg bg-gradient-to-b from-blue-400 to-blue-700  rounded-full drop-shadow-xl shadow-[0_0_30px_3px_rgba(0,123,255,0.8)]">

              
            </motion.span> 


            <div className="">
            <motion.div
            ref={iconRef}
            style={{ color: col }}
            className="absolute mb-6  -translate-x-38">
              <SearchFolderIcon className="text-inherit size-28" />
            </motion.div>

            <div className="w-40 h-24 mt-8 translate-x-4 ">
              <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">1</span>
              <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Select a PDF</h1>
              <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Select a PDF you want to chat with.</h1>

            </div>

            </div>
            <div className="translate-y-20">
            <motion.div
            ref={iconRef2}
            style={{ color: col2 }}
            className="absolute mb-6  translate-x-8">
              <UploadFolderIcon className="text-inherit size-28" />
            </motion.div>

            <div className="w-40 h-24 mt-8 -translate-x-38 ">
              <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">2</span>
              <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Upload </h1>
              <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Upload your PDF with one click.</h1>

            </div>

            </div>
            <div className="translate-y-36">
            <motion.div
            ref={iconRef3}
            style={{ color: col3 }}
            className="absolute mb-6  -translate-x-38">
              <MessagesIcon className="text-inherit size-28" />
            </motion.div>

            <div className="w-40 h-24 mt-8 translate-x-4 ">
              <span className="rounded-full font-primary bg-[#3B82F6] px-4 py-2 text-white ">3</span>
              <h1 className="font-primary tracking-tighter font-normal text-xl text-white px-2 mt-4">Chat</h1>
              <h1 className="font-primary tracking-tighter font-normal text-md text-white/50 px-2">Ask any question you want.</h1>

            </div>

            </div>
            
            </div>
 

        </div>
          <div id="about-us">
            <Aboutus />
          </div>

          
        </div>
      </div>
    );
  };