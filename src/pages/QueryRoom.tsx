import { useEffect } from "react";
import { Navbar } from "../components/DashboardNavbar";
import { QueryBox } from "../components/QueryBox";
import { AISearch } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";
import {  useRecoilState, useSetRecoilState } from "recoil";
import { activeSidebarOption, Message, messages } from "../atoms";
import { useParams } from "react-router-dom";
import { useHistory } from "../hooks/useHistory";


export const QueryRoom = () => {

  const setActiveSidebarOption = useSetRecoilState(activeSidebarOption)
    const [allMessages,setAllMessages] = useRecoilState(messages)
  
  const params = useParams()
  const id = params.id

  const {history} = useHistory({roomId:id}) as {history:Message[]}
  const {loading} = useHistory({roomId:id})

  console.log("history before settng",history)
  useEffect(()=>{

    setActiveSidebarOption({option:"doc"})

    if(!loading){
      setAllMessages(history.map((msg) => ({ ...msg, isHistory: true }))); 
    }

    

  },[history])
  console.log(allMessages, " after")

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
