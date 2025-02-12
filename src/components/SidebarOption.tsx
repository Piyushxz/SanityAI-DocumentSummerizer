import { ReactElement } from "react"
import { useRecoilValue } from "recoil"
import { activeSidebarOption } from "../atoms"

export const SidebarOption = ({
    text,
    icon,
    variant
}:
{
    text:string,
    icon : ReactElement,
    variant : "home" | "fav" | "doc"
})=>{

    const sidebarOpt = useRecoilValue(activeSidebarOption)
    console.log(sidebarOpt)
    return(
        <div className={` ${variant === sidebarOpt.option ? " bg-blue-600/20    text-blue-500  " :' '} flex py-2 px-6 my-6 items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500 text-white`}>
        <div className={`  ${variant === sidebarOpt.option ? "    text-blue-500 " :' '}`}>
        {icon }

        </div>
        <h3 className={`  ${variant === sidebarOpt.option ? "    text-blue-500 " :' '}
            text-md font-medium tracking-tighter font-primary lg:text-lg`}>
            {text}
        </h3>
    </div>
    )
}