
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="w-[100vw] flex justify-center border-b border-gray-400/50"
      >
        <div className="w-[80vw] flex justify-between p-4">
          <h1
            className="font-primary font-extrabold text-[#FDFEFF] text-3xl text-primary tracking-tighter bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate('/')}
          >
            sanityAI
          </h1>
          <div className="flex space-x-4">
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-blue-500 font-medium text-sm px-4 py-2"
            >
              About Us
            </Link>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};