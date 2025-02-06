import { ReactElement } from "react"
import { LoadingIcon } from "./icons/LoadingIcon"
export interface ButtonProps{
    text:string,
    variant:"primary" | "secondary" | "delete" | "wide",
    size:"sm" | "md" | "lg" |"wide",
    leftIcon? : ReactElement,
    endIcon? : ReactElement,
    onClick? : ()=>void,
    type?:"button" | "submit" | "reset",
    isLoading?:boolean
}


const variantStyles = {
    "primary":" bg-white text-black hover:opacity-50",
    "secondary": "bg-white text-black hover:bg-white/50 px-8 text-sm font-normal tracking-tighter",
    "delete":"bg-red-700 text-white hover:bg-red-600 ",
    "wide":" bg-[#191919] hover:bg-[#191919]/70 text-white"
}

const sizeStyles = {
    "sm":" py-1 px-2 text-sm rounded-lg",
    "md":" py-2 px-4 text-base rounded-lg",
    "lg":" py-2 px-4 text-base rounded-lg",
    "wide":"w-full font-primary tracking-tighter font-semibold px-8 rounded-lg pt-4 pb-4 text-center"
}

const defaultStyles = {
    "default":"font-primary  transition-all duration-300 "
}


export const Button =(props:ButtonProps)=>{
    return(
        <>

        <button disabled={props.isLoading}
         type={props.type}onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles.default} ${props.isLoading ? "opacity-50" :"opacity-100"}`}>
          
          {props.isLoading ?
          <div className="flex justify-center">
            <LoadingIcon/>
          </div>
            :
            props.leftIcon?
                    <div className="flex items-center">
                        <div className="pr-2">{props.leftIcon}</div> 
                            {props.text}
                        </div>
                              : 
                        <div>{props.text}</div>
          }

        </button>
        

        </>
    )
}