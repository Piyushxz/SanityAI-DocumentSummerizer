import React, { useState } from 'react';

const Aboutus: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-blue-900">
        <div className="container mx-auto p-4 mt-14">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white mb-6">
                About Us
              </h1>
              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div className="border border-gray-700 rounded-lg shadow-md">
                  <h2 className="bg-gray-800 p-4 rounded-t-lg">
                    <button
                      className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                      type="button"
                      onClick={() => toggleAccordion(1)}
                    >
                      Analyze Your Text
                      <span className={`transition-transform duration-200 ${openAccordion === 1 ? 'transform rotate-90' : ''}`}>
                        ➤
                      </span>
                    </button>
                  </h2>
                  {openAccordion === 1 && (
                    <div className="p-4 bg-gray-900 rounded-b-lg">
                      <p className="text-gray-300">
                        Our AI-powered Document Summarizer helps you quickly and accurately summarize your documents. Whether it's a lengthy report or a complex legal document, our tool can provide concise and meaningful summaries to save you time and effort.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div className="border border-gray-700 rounded-lg shadow-md">
                  <h2 className="bg-gray-800 p-4 rounded-t-lg">
                    <button
                      className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                      type="button"
                      onClick={() => toggleAccordion(2)}
                    >
                      Free to Use
                      <span className={`transition-transform duration-200 ${openAccordion === 2 ? 'transform rotate-90' : ''}`}>
                        ➤
                      </span>
                    </button>
                  </h2>
                  {openAccordion === 2 && (
                    <div className="p-4 bg-gray-900 rounded-b-lg">
                      <p className="text-gray-300">
                        Our AI Document Summarizer is completely free to use. We believe in providing accessible tools to help you manage your documents more efficiently without any cost.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div className="border border-gray-700 rounded-lg shadow-md">
                  <h2 className="bg-gray-800 p-4 rounded-t-lg">
                    <button
                      className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                      type="button"
                      onClick={() => toggleAccordion(3)}
                    >
                      Browser Compatible
                      <span className={`transition-transform duration-200 ${openAccordion === 3 ? 'transform rotate-90' : ''}`}>
                        ➤
                      </span>
                    </button>
                  </h2>
                  {openAccordion === 3 && (
                    <div className="p-4 bg-gray-900 rounded-b-lg">
                      <p className="text-gray-300">
                        Our tool works seamlessly across all major web browsers, including Chrome, Firefox, Safari, and Edge. You can access our Document Summarizer from any device with an internet connection.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Suggestions Section */}
              <div className="mt-6">
                <h1 className="font-montserrat font-bold text-2xl md:text-4xl text-white mb-8">
                  If you have any suggestions, let us know!
                </h1>

                <label htmlFor="exampleFormControlInput1" className="block text-lg font-medium mb-2 text-white">Email address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white mb-4"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <label htmlFor="exampleFormControlTextarea1" className="block text-lg font-medium mb-2 text-white">Your Remarks</label>
                <textarea
                  className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white mb-4"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your comments here"
                ></textarea>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Document Summarizer. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Aboutus;