import { useRecoilState } from "recoil"
import { sidebarOpen } from "../atoms"
import { SidebarOpenIcon } from "./icons/SidebarOpenIcon"

export const Sidebar = ()=>{
    const [isSidebarOpen,setIsSidebarOpen] = useRecoilState(sidebarOpen)

    console.log("sidebar",isSidebarOpen)
    return(
        <div
        className={`bg-black top-0 left-0 w-64 h-screen fixed z-50 transition-all duration-500 border-r border-gray-300/20 ${
          isSidebarOpen ? " translate-x-0" : " -translate-x-full"
        }`}

      >
        <div className="flex px-2 py-2 items-center">
            <SidebarOpenIcon onClick={()=>setIsSidebarOpen(val=>!val)}/>
            <h3 className="text-xl font-bold tracking-tighter font-primary text-white lg:text-2xl">Menu</h3>
        </div>
        </div>

    )
}