import { useNavigate } from "react-router-dom"
import pdf from "../assets/pdf-svgrepo-com.svg"
import { Button } from "./Button"
import ChatIcon from "./icons/ChatIcon"
import DeleteIcon from "./icons/DeleteIcon"
import FavoritesIcon from "./icons/FavourtieIcon"
import { useSetRecoilState } from "recoil"
import { activeDocumentId } from "../atoms"
import { toast } from "sonner"
import axios from "axios"
export const PDFCard = ({pdfName,documentId}:{
    pdfName:string,
    documentId : string
}) =>{

    const navigate = useNavigate()
    const setActiveDocumentID = useSetRecoilState(activeDocumentId)
    const handleDocumentDelete = async () => {
        console.log(documentId); 
        try {
            const response = await toast.promise(
                axios.delete(`http://localhost:3003/api/v1/documents`, {
                    headers: {
                        Authorization:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OGFkMjU2LWZkYTEtNDI5Yy1hOTFhLTFhYjM2M2UyZDBlNiIsImlhdCI6MTczODU5MzU1Mn0.FVLDna4tmrtUQI3jVKjlqyF1FxNj00PpkkHflqCmTgI',
                        "Content-Type": "application/json",
                    },
                    data: { documentId },
                }),
                {
                    loading: "Deleting...",
                    success: (data) => "Document has been deleted successfully!",
                    error: "Failed to delete document. Please try again.",
                }
            );
            console.log(response); 
        } catch (e) {
            console.log(e); 
        }
    };
    
    return(
        <div className="w-80  border border-gray-200/20 rounded-lg">
            <div className="flex justify-end">
                <div className="flex gap-2 p-2 absolute">
                    <FavoritesIcon/>
                    <div onClick={handleDocumentDelete}>
                    <DeleteIcon />

                    </div>
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
                <Button text="Chat" onClick={()=>{navigate(`/${documentId}`)
                setActiveDocumentID(documentId)
            }} size="lg" variant="secondary" leftIcon={<ChatIcon/>} />
            </div>
        </div>
    </div>
    )
}