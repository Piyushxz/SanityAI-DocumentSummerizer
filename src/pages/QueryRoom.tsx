import { useEffect } from "react";
import { Navbar } from "../components/DashboardNavbar";
import { QueryBox } from "../components/QueryBox";
import { AISearch } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";
import {  useSetRecoilState } from "recoil";
import { activeSidebarOption } from "../atoms";


export const QueryRoom = () => {

  const setActiveSidebarOption = useSetRecoilState(activeSidebarOption)
  useEffect(()=>{

    setActiveSidebarOption({option:"doc"})


  },[])
  return (
    <div>
            <div className="w-screen h-screen flex ">
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Navbar />
        <div className="flex flex-col flex-grow justify-between items-center overflow-hidden">
          <div className="h-full w-screen justify-center overflow-y-auto flex">
          <div className="lg:w-[50vw] w-[80vw] h-full  flex  ">
            <QueryBox/>
          </div>
          </div>

          <div className="mb-6">
            <AISearch />
          </div>
        </div>
      </div>
    </div>
        <Sidebar/>
    </div>

  );
};
