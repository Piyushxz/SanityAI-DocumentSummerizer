import { Navbar } from "../components/Navbar"
import Features from "../components/Featurs"
import {motion} from "motion/react"
import { toast } from "sonner"
export const Landing = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center mt-24">
                <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay:0.5,
                          ease: "easeInOut",
                        }}
                className="w-full md:w-1/2 text-center">
                    <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-7xl text-white">
                        Document{" "}
                        <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
                            Summerizer
                        </span>{" "}
                        Using RAG.
                    </h1>
                    <h3 className="font-primary tracking-tighter font-bold text-xl md:text-xl mt-4 text-white opacity-80">
                        Summarize long documents with the power of RAG technology, blending advanced retrieval and generation.
                    </h3>
                </motion.div>
                <motion.div  initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay:0.7,
                          ease: "easeInOut",
                        }}
                className="mt-6">
                <button onClick={()=>toast.success('Welcome!')}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8">
                    Start Now
                </button>
                </motion.div>
            </div>

            <div className="mt-24">
                <div className="flex justify-center">
                <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-6xl text-white">
                Features
                </h1>
                </div>

            <Features/>
            </div>
        </div>
    )
}