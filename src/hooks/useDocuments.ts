import axios from "axios";
import { useEffect, useState } from "react";



export const useDocument =  ()=>{

    const [documents,setDocuments] = useState([])
    const url = 'http://localhost:3003/api/v1/documents'

   async function getDocuments(){
        const response = await axios.get('http://localhost:3003/api/v1/documents',{
            headers:{
                Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OGFkMjU2LWZkYTEtNDI5Yy1hOTFhLTFhYjM2M2UyZDBlNiIsImlhdCI6MTczODU5MzU1Mn0.FVLDna4tmrtUQI3jVKjlqyF1FxNj00PpkkHflqCmTgI'
            }
        })

        setDocuments(response.data.documents)

    }
    useEffect(()=>
    {
        getDocuments()

        const id = setInterval(getDocuments,5000);

        return ()=> clearInterval(id)
    }
        ,[])

    
    return {documents}
}