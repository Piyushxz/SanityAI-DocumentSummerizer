import { motion } from "motion/react"
export const Navbar = ()=>{
    return(
        <>
        <motion.div 
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.2,ease:"easeInOut"}}
        className="w-[100vw] flex justify-center border-b border-gray-400/50">
            <div className=" w-[80vw] flex justify-between p-4  ">
                <h1 className="font-primary font-extrabold text-[#FDFEFF] text-3xl text-primary tracking-tighter  bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text  text-transparent">sanityAI</h1>
            </div>
        </motion.div>

        </>
    )
}