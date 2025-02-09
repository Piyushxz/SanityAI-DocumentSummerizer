import { ReactElement } from "react"

export const SidebarOption = ({
    text,
    icon
}:
{
    text:string,
    icon : ReactElement
})=>{
    return(
        <div className="flex py-2 px-6 my-6 items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500 text-white">
        {icon}
        <h3 className="text-md font-medium tracking-tighter font-primary lg:text-lg">
            {text}
        </h3>
    </div>
    )
}