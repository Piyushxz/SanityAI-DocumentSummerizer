import { Navbar } from "../components/DashboardNavbar"
import { Sidebar } from "../components/Sidebar"

export const Dashboard = () =>{
    return(
        <div className="">
            <Sidebar/>
            <Navbar/>
        </div>
    )
}