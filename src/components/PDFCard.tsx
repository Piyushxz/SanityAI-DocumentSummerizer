import { useNavigate } from "react-router-dom"
import pdf from "../assets/pdf-svgrepo-com.svg"
import { Button } from "./Button"
import ChatIcon from "./icons/ChatIcon"
import DeleteIcon from "./icons/DeleteIcon"
import FavoritesIcon from "./icons/FavourtieIcon"
import { useSetRecoilState } from "recoil"
import { activeDocumentId } from "../atoms"
export const PDFCard = ({pdfName,documentId}:{
    pdfName:string,
    documentId : string
}) =>{

    const navigate = useNavigate()
    const setActiveDocumentID = useSetRecoilState(activeDocumentId)
    return(
        <div className="w-80  border border-gray-200/20 rounded-lg">
            <div className="flex justify-end">
                <div className="flex gap-2 p-2 absolute">
                    <FavoritesIcon/>
                    <DeleteIcon/>
                </div>
            </div>
        <div className="h-40 border-b border-gray-200/20 flex justify-center items-center">
            <img src={pdf} alt="PDF icon" className="w-[80%] h-[80%]" />
        </div>
        <div className="p-2">
            <div>
                <h3 className="text-wrap text-sm font-bold capitalize font-primary tracking-tighter md:text-lg">
                    {pdfName}
                </h3>
            </div>
            <div className="flex gap-2 mt-2">
                <Button text="Chat" onClick={()=>{navigate(`/chat/${documentId}`)
                setActiveDocumentID(documentId)
            }} size="lg" variant="secondary" leftIcon={<ChatIcon/>} />
            </div>
        </div>
    </div>
    )
}