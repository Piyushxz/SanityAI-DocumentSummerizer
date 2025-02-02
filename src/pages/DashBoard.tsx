import { Button } from "../components/Button"
import { Navbar } from "../components/DashboardNavbar"
import ChatIcon from "../components/icons/ChatIcon"
import { Sidebar } from "../components/Sidebar"
import pdf from "../assets/pdf-svgrepo-com.svg"

export const Dashboard = () =>{
    return(
        <div className="">
            <Sidebar/>
            <Navbar/>

            <div className="flex  justify-center">
                <div className="w-[70vw]  text-white">
                    <div className="flex mt-6">
                        <h3 className="text-wrap text-3xl font-extrabold capitalize font-primary tracking-tighter md:text-4xl">
                            Welcome , testUser!
                        </h3>
                    </div>
                <div className="mt-6 grid">
                    <div className="w-80  border border-gray-200/20 rounded-lg">
                        <div className="h-40 border-b border-gray-200/20 flex justify-center items-center">
                            <img src={pdf} alt="PDF icon" className="w-[80%] h-[80%]" />
                        </div>
                        <div className="p-2">
                            <div>
                                <h3 className="text-wrap text-sm font-bold capitalize font-primary tracking-tighter md:text-lg">
                                    PDF name.pdf
                                </h3>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Button text="Chat" onClick={()=>{}} size="lg" variant="secondary" leftIcon={<ChatIcon/>} />
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}