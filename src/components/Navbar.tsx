import React from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="w-full flex justify-center border-b border-gray-400/50"
      >
        <div className="w-4/5 flex justify-between items-center p-4">
          <h1 className="font-primary font-extrabold text-[#FDFEFF] text-3xl text-primary tracking-tighter bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            DoctChatAI
          </h1>
          <div className="flex space-x-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-9 rounded-md px-4">
              Login
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-9 rounded-md px-4">
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;