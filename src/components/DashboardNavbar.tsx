import { motion } from "motion/react"
import { SidebarCloseIcon } from "./icons/SidebarCloseIcon"
import {  useSetRecoilState } from "recoil"
import { sidebarOpen } from "../atoms"
import { Sidebar } from "./Sidebar"
export const Navbar = ()=>{
    const setIsSidebarOpen = useSetRecoilState(sidebarOpen)

    return(

        <>
        
        <motion.div 
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.2,ease:"easeInOut"}}
        className="w-[100vw] flex justify-between items-center
         border-b border-gray-400/30 p-2 z-100">
            <div className=" ">
                <SidebarCloseIcon onClick={()=>setIsSidebarOpen(val=>!val)}/>
            </div>
            <div className=" w-[85vw] flex justify-between   ">
                <h1 className="font-primary font-extrabold text-[#FDFEFF] text-3xl text-primary tracking-tighter  bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text  text-transparent">sanityAI</h1>
            </div>
        </motion.div>

        </>
    )
}