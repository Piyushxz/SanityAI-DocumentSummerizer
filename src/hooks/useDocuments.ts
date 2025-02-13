import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { showIsArchivedDocuments } from "../atoms";



export const useDocument =  ()=>{

    const [documents,setDocuments] = useState([])
    const showArchivedDocuments = useRecoilValue(showIsArchivedDocuments)

    
    const url = showArchivedDocuments ? `http://localhost:3003/api/v1/favourite` : `http://localhost:3003/api/v1/documents`


   async function getDocuments(){
        const response = await axios.get(url,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })

        setDocuments(response.data.documents)

    }
    useEffect(()=>
    {
        getDocuments()

        const id = setInterval(getDocuments,10000);

        return ()=> clearInterval(id)
    }
        ,[showArchivedDocuments])

    
    return {documents}
}