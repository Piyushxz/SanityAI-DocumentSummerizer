import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    // Add logic to navigate to login page or open login modal
    navigate('/login');
  };

  const handleSignUpClick = () => {
    // Add logic to navigate to sign-up page or open sign-up modal
    navigate('/signup');
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-customGray focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        style={{ position: 'relative', top: '0px', left: '0px', zIndex: '100' }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 h-screen w-40 transition-all duration-500 border-r-4 border-customGray ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-gray-800">
          <ul onClick={handleLoginClick} className="space-y-2 font-medium">
            <li>
              <div className="font-montserrat font-semibold flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-customGray border-2 border-customGray mt-14">
                <span className="ms-3">Login</span>
              </div>
            </li>
          </ul>

          <ul onClick={handleSignUpClick} className="space-y-2 font-medium">
            <li>
              <div className="flex font-montserrat font-semibold items-center p-2 text-white rounded-lg dark:text-white hover:bg-customGray border-2 border-customGray group mt-2">
                <span className="ms-3">SignUp</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
