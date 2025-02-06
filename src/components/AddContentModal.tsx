import { useRecoilState } from "recoil";
import { isContentModalOpen } from "../atoms";
import {motion} from "motion/react"
export const Modal = () => {
    const [ismodalOpen, setIsModalOpen] = useRecoilState(isContentModalOpen);

    return (
        <>
    
                <motion.div 
                          initial={{ opacity: 0,scale:0.9 }} animate={{ opacity:1,scale:1 }}  exit={{opacity:0}} 
                          transition={{
                            duration: 0.2,
                            ease:'easeInOut',
                          }}
                    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50  animate-in fade-in-0 transition-opacity"
               
                            >
                        <div className="w-[500px] h-[200px] bg-black border border-gray-600/70 shadow-xl rounded-lg">
                            <div className="flex justify-between p-4">
                                <h1 className="text-lg font-extrabold text-white capitalize font-primary tracking-tighter md:text-xl ">Add Document,</h1>
                                <h1 className="text-white" onClick={()=>setIsModalOpen(false)}>x</h1>
                            </div>

                        <div>
                        <div className="mt-6 ml-6 mr-6">
            <label  className="block mb-2 text-md font-medium text-white dark:text-white font-primary ">Document Name</label>
            <input 
            type={"text"}  className=" bg-[#191919]  text-white text-sm rounded-lg focus:ring-white  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "   />
        </div> 
                        </div>
                        </div>
                </motion.div>
                    
        

        </>
    );
};
