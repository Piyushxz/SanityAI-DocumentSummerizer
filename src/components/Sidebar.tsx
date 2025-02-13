import { useRecoilState ,useRecoilValue, useSetRecoilState} from "recoil"
import { activeDocumentData, activeSidebarOption, showIsArchivedDocuments, sidebarOpen } from "../atoms"
import { SidebarOpenIcon } from "./icons/SidebarOpenIcon"
import HomeIcon from "./icons/HomeIcon"
import { SidebarOption } from "./SidebarOption"
import FavoritesIcon from "./icons/FavourtieIcon"
import {motion} from "motion/react"
import {  useParams } from "react-router-dom"
import { DoucumentIcon } from "./icons/DocuementIcon"
export const Sidebar = ()=>{
    const [isSidebarOpen,setIsSidebarOpen] = useRecoilState(sidebarOpen)
    const activeDocData = useRecoilValue(activeDocumentData)
    const setSidebarOption = useSetRecoilState(activeSidebarOption)
    const {id} = useParams()
    const setShowArchivedDocuments = useSetRecoilState(showIsArchivedDocuments)
    console.log("sidebar",isSidebarOpen)
    console.log(location.pathname)
    return(
        <motion.div
        animate={{ baseFrequency: 0.5 }}

        transition={{ease: "easeInOut",
          type: "spring", bounce: 0.65,    visualDuration: 0.5}}
        className={`bg-black top-0 left-0 w-64 h-screen fixed z-100 transition-all duration-500 border-r border-gray-300/20 ${
          isSidebarOpen ? " translate-x-0" : " -translate-x-full"
        }`}

      >
        <div className="flex px-2 py-2 items-center border-b border-gray-300/20">
            <SidebarOpenIcon onClick={()=>setIsSidebarOpen(val=>!val)}/>
            <h3 className="text-xl font-bold tracking-tighter font-primary text-white lg:text-2xl">Menu</h3>
        </div>

        <div>

            {
              id && activeDocData.documentName && 
              <SidebarOption 
              variant="doc" text={activeDocData.documentName} icon={<DoucumentIcon/>}/>
            }
            <SidebarOption onClick={()=>{setSidebarOption({option:'home'})
              setShowArchivedDocuments(false)
            }}
            variant="home" text="Home" icon={ <HomeIcon className="text-inherit" />}/>
            <SidebarOption onClick={()=>{setShowArchivedDocuments(true)
              setSidebarOption({option:'fav'})
            }}
            variant="fav" text="Favourite" icon={ <FavoritesIcon className="text-inherit" />}/>
            


        </div>
        </motion.div>

    )
}