import { Navbar } from "../components/DashboardNavbar";
import { QueryBox } from "../components/QueryBox";
import { AISearch } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";

export const QueryRoom = () => {
  return (
    <div>
            <div className="w-screen h-screen flex ">
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Navbar />
        <div className="flex flex-col flex-grow justify-between items-center overflow-hidden">
          <div className="lg:w-[50vw] w-[80vw] h-full border border-white flex overflow-y-auto">
            <QueryBox/>
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
