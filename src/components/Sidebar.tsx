import { useRecoilState } from "recoil"
import { sidebarOpen } from "../atoms"
import { SidebarOpenIcon } from "./icons/SidebarOpenIcon"
import HomeIcon from "./icons/HomeIcon"
import { SidebarOption } from "./SidebarOption"
import FavoritesIcon from "./icons/FavourtieIcon"

export const Sidebar = ()=>{
    const [isSidebarOpen,setIsSidebarOpen] = useRecoilState(sidebarOpen)

    console.log("sidebar",isSidebarOpen)
    return(
        <div
        className={`bg-black top-0 left-0 w-64 h-screen fixed z-100 transition-all duration-500 border-r border-gray-300/20 ${
          isSidebarOpen ? " translate-x-0" : " -translate-x-full"
        }`}

      >
        <div className="flex px-2 py-2 items-center border-b border-gray-300/20">
            <SidebarOpenIcon onClick={()=>setIsSidebarOpen(val=>!val)}/>
            <h3 className="text-xl font-bold tracking-tighter font-primary text-white lg:text-2xl">Menu</h3>
        </div>

        <div>

            <SidebarOption text="Home" icon={ <HomeIcon className="text-inherit" />}/>
            <SidebarOption text="Favourite" icon={ <FavoritesIcon className="text-inherit" />}/>

        </div>
        </div>

    )
}