import { useRecoilState } from "recoil";
import { isContentModalOpen } from "../atoms";
import { motion, AnimatePresence } from "framer-motion";
import PDFUpload from "./PDFUpload";
import { Button } from "./Button";

export const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useRecoilState(isContentModalOpen);

    return (
   
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}  
                    exit={{ opacity: 0,scale:0}} 
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                >
                    <div className="w-[500px] bg-black border border-gray-600/70 shadow-xl rounded-lg">
                        <div className="flex justify-between p-4 border-b border-gray-600/70">
                            <h1 className="text-lg font-extrabold text-white capitalize font-primary tracking-tighter md:text-xl">
                                Add Document
                            </h1>
                            <h1 
                                className="text-white cursor-pointer" 
                                onClick={() => setIsModalOpen(false)}
                            >
                                x
                            </h1>
                        </div>

                        <div className="mt-6 ml-6 mr-6">
                            <label className="block mb-2 text-md font-medium text-white font-primary">
                                Document Name
                            </label>
                            <input 
                                type="text"
                                className="bg-[#191919] text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col mt-6 ml-6 mr-6">
                        <label className="block mb-2 text-md font-medium text-white font-primary">
                                Upload Your Document:
                        </label>
                        <PDFUpload/>

                        </div>
                        <div className=" mx-4 my-6">
                            <Button variant="wide" size="wide" text="Uplaod"  />
                        </div>
                    </div>
                </motion.div>
     
    );
};
