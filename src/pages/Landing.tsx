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
import { MailIcon, Newspaper, Rocket, Sparkles, VideoIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import ss from "../assets/ss.png"
import stars from "../assets/stars.png"
import gridline from "../assets/grid-lines.png"


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
        <div className="flex flex-col items-center justify-center mt-[150px] md:[100px]">
        <motion.div 
                 initial={{ opacity: 0, y: 0 }}
                 animate={{ opacity: 1, y: 20 }}
         transition={{ type: "spring", stiffness: 200,bounce:0.1, duration:0.4,delay:0.5,damping:15}}
        className="px-4 rounded-full  bg-blue-600/20  flex gap-2 mb-5 py-2 max-w-fit flex items-center border border-blue-600/30 ">
              <Rocket className="  size-4 text-blue-500/70" />
              <h1 className="text-sm  font-primary tracking-tighter font-medium text-blue-500/70">sanityAI beta ready to use.</h1>
            </motion.div>
          <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 20 }}
                    transition={{         
                         ease: "easeInOut",
                      type: "spring",
                      bounce: 1,
                      stiffness:150, duration:0.4,delay:0.5}}
            className="w-[80vw] md:w-1/2 text-center"
          >


            <h1 className="font-primary tracking-tighter font-extrabold text-5xl md:text-7xl text-white">
              Document{" "}
              <span className="w-[85vw] bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
                Summerizer
              </span>{" "}
              Using RAG.
            </h1>
            <h3 className="font-primary tracking-tighter font-semibold text-md md:text-lg mt-4 text-white opacity-80">
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
        className="inline-flex font-primary tracking-tighter items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 text-white font-normal hover:opacity-80 transition-all duration-300 h-11 rounded-md px-6 md:px-10"
      >
        Start Now
      </motion.button>
      <motion.button
    
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://youtu.be/47pB5RoGcyo')}

        className="inline-flex font-primary flex gap-2 tracking-tighter items-center justify-center bg-white  to-blue-700 text-black font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-6 md:px-10"
      >
        <VideoIcon/>
        Watch Video
      </motion.button>

          </motion.div>
        </div>
  
        <div className="mt-[150px]">
          <motion.div
            initial={{ opacity: 0, y: 0}}
            animate={{ opacity: 1, y: -20}}
            transition={{
              duration: 0.7,
              delay: 0.9,
              type: "spring",
              bounce: 0.5,
              damping:30,
              visualDuration: 1.2,
            }}
            className="flex justify-center overflow-hidden"
          >
            <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-6xl text-white">
              Features
            </h1>
          </motion.div>
          <Features />
            <div className="w-full flex justify-center">
            <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] border border-white/20 p-2.5 rounded-xl mt-3">
                <div style={{backgroundImage :`url(${ss})`}}
                className="aspect-video bg-cover border border-white/20 rounded-lg">

                </div>
            </div>
            </div>

            <div className="w-full flex justify-center mt-[300px] ">
          
            
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
          <div className="w-full flex justify-center my-[200px] ">
              <section className="py-20  w-[90vw]  md:w-[70vw]">
                <div style={{backgroundImage:`url(${stars})`}}
                 className="border border-white/15 py-24 rounded-xl overflow-hidden relative">
                    <div style={{backgroundImage:`url(${gridline})`}} className="absolute inset-0 bg-[rgba(0,48,135,1)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at+50%_35%,black,transparent)] ">                    </div>
                    <div className="relative">
                    <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tight text-center text-white font-primary font-medium">
                Document, Summarize, and More
              </h2>                        <p className="text-center text-lg md:text-xl  max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tighter font-primary ">Achieve clear , impactful results without the complexity.</p>
                        <div className="flex justify-center mt-8">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/login')}
                            className="inline-flex font-primary tracking-tighter items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 text-white font-normal hover:opacity-80 transition-all duration-300 h-11 rounded-md px-6 md:px-10"
                          >
                            Start Now
                          </motion.button>
                        </div>
                    </div>

                </div>
              </section>


          </div>

          <div className="w-full flex justify-center mt-24 mb-[150px]">
  <div className="grid grid-cols-12 border-white w-[80vw] md:w-[70vw]">
    <div className="grid col-span-12 md:col-span-4 border border-blue-500/30 h-48 flex items-center rounded-l-xl">
      <div className="flex flex-col gap-2 ml-10">
        <div className="flex gap-4 items-center">
          <MailIcon className="text-blue-500 size-8" />
          <h1 className="font-primary text-white tracking-tighter text-2xl font-medium">Email</h1>
        </div>
        <h1 className="font-primary text-white tracking-tighter text-xl font-normal">support@sanity.com</h1>
      </div>
    </div>

    <div className="grid col-span-12 md:col-span-4 border border-blue-500/30 h-48 flex items-center">
      <div className="flex flex-col gap-2 ml-10">
        <div className="flex gap-4 items-center">
          <Newspaper className="text-blue-500 size-8" />
          <h1 className="font-primary text-white tracking-tighter text-2xl font-medium">Media Inquiries</h1>
        </div>
        <h1 className="font-primary text-white tracking-tighter text-xl font-normal">newspaper@sanity.com</h1>
      </div>
    </div>

    <div className="grid col-span-12 md:col-span-4 border border-blue-500/30 h-48 flex items-center rounded-r-xl">
      <div className="flex flex-col gap-2 ml-10">
        <div className="flex gap-4 items-center">
          <Sparkles className="text-blue-500 size-8" />
          <h1 className="font-primary text-white tracking-tighter text-2xl font-medium">Beta Release</h1>
        </div>
        <h1 className="font-primary text-white tracking-tighter text-xl font-normal">Version 0.9</h1>
      </div>
    </div>
  </div>
</div>



          <div id="about-us ">
            <Aboutus />
          </div>

          
        </div>
        <Footer/>
      </div>
    );
  };