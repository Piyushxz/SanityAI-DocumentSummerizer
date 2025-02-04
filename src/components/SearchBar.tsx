import {  useRef } from "react"
import { SearchIcon } from "./icons/SearchIcon";
export const AISearch =()=>{
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
  
    const handleInputQuery= async ()=>{

        if(!inputRef.current?.value ){
            return
        }

        if(inputRef.current.value.length  < 1){
            return
        }

        try{

    
           


        }
        catch(e){
       
            console.log(e)
        }

    }

    return(
            <div className=" w-[80vw] md:w-[50vw] h-24 lg:h-36 rounded-2xl bg-[#191919] font-primary border border-gray-500/20  flex flex-col p-4">
            <textarea ref={inputRef}
            className="bg-[#191919] text-white w-full font-primary p-2 resize-none flex-grow outline-none 
                    text-gray-900 dark:text-gray-100 
                    font-medium font-satoshi text-md
                    placeholder:text-white/40 dark:placeholder:text-white
                    transition-colors duration-200
                    focus:ring-0 rounded-2xl"
            placeholder="Ask your PDF...."
            ></textarea>
                <div className="w-full flex justify-end items-center mt-2">
                    <div onClick={handleInputQuery}
                     className="border border-white bg-white border-opacity-40 rounded-full p-2 hover:bg-opacity-50">
                        <SearchIcon classname="" />

                    </div>
                </div>
            </div>


    )
}