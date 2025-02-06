import { useSetRecoilState } from "recoil"
import { Navbar } from "../components/DashboardNavbar"
import { PDFCard } from "../components/PDFCard"
import { Sidebar } from "../components/Sidebar"
import { useDocument } from "../hooks/useDocuments"
import { isContentModalOpen } from "../atoms"

export const Dashboard = () =>{
    const {documents} = useDocument()
    const setContentOpenStatus = useSetRecoilState(isContentModalOpen)
    return(
        <div className="">
            <Sidebar/>
            <Navbar/>
            <div className="flex  justify-center">
                <div className="lg:w-[70vw] w-[80vw]  text-white">
                    <div className="flex mt-6">
                        <h3 className="text-wrap text-3xl font-extrabold capitalize font-primary tracking-tighter md:text-4xl">
                            Welcome , testUser!
                        </h3>
                    </div>
                <div className="mt-6  flex flex-wrap gap-4">
                    {
                        documents.map(({documentName,documentId},)=>
                        <PDFCard key={documentId}  pdfName={documentName} documentId={documentId}/>
                        )
                    }


                </div>

                        <button onClick={()=>setContentOpenStatus(val=>!val)}>test</button>

                </div>
            </div>
        </div>
    )
}