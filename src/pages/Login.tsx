import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '../components/Button';
import { useSetRecoilState } from 'recoil';
import { loggedInUserName } from '../atoms';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const setActiveUser = useSetRecoilState(loggedInUserName)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!username || !password) {
      toast.error("Username and password are required!");
      return;
    }
  
    setIsLoading(true);
    const loadId = toast.loading("Logging In..")

    try {
      const response = await axios.post("https://be1.piyushxz.online/api/v1/user/signin", {
        username,
        password,
      });
  
      console.log(response);
  
      toast.success("Login successful, redirecting...");
      setActiveUser(response.data.username);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status code outside of 2xx
        if (error.response.status === 404) {
          toast.error("User does not exist");
        } else if (error.response.status === 500) {
          toast.error("Could not sign in, server error!");
        } else {
          toast.error(error.response.data.message || "An unexpected error occurred");
        }
      } else if (error.request) {
        toast.error("No response from server. Please check your connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
      toast.dismiss(loadId)
    }
  };
  

  return (
    <div className="h-screen w-full flex justify-center bg-gradient-to-b from-black to-blue-900">
      
      <div className="flex flex-col gap-2 justify-center w-96">

      <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
          
              ease: "easeInOut",

            }}
            onSubmit={handleSubmit}
            className=" w-full bg-black/40 p-8 rounded-2xl mr-4 shadow-lg"
          >
            <h3 className="text-white font-primary text-3xl font-extrabold mb-8">
              Login
            </h3>


            <div className="space-y-4">
              <div>
                <input
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 font-primary w-full text-sm text-white px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 font-primary w-full text-sm text-white px-4 py-3.5 rounded-md o focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
                <Button isLoading={isLoading} variant='form' size='wide' text='Login' />
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-300 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="space-x-6 flex justify-center">
              <button type="button" className="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                  <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                  <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                  <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" />
                  <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" />
                  <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" />
                </svg>
              </button>
              <button type="button" className="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" />
                  <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" />
                </svg>
              </button>
            </div>

          </motion.form>
          <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="text-sm text-gray-300 flex justify-center"
            >
              Don't have an account? <a href="javascript:void(0);" className="text-blue-400 font-semibold hover:underline " onClick={() => navigate('/signup')}>Register here</a>
            </motion.p>
      </div>
    </div>
  );
};

export default Login;