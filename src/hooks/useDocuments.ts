import axios from "axios";
import { useEffect, useState } from "react";



export const useDocument =  ()=>{

    const [documents,setDocuments] = useState([])
    const url = 'http://localhost:3003/api/v1/documents'

   async function getDocuments(){
        const response = await axios.get('http://localhost:3003/api/v1/documents',{
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
        ,[])

    
    return {documents}
}