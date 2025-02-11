import { atom } from "recoil";

interface Message{
    message:string,
    sentBy:'user' | 'bot'
}
interface Document{
    documentName:string | null,
    documentId:string | null
}


export const loggedInUserName = atom({
    key:"loggedInUserName",
    default:""
})

export const activeDocumentData = atom<Document>({
    key:"activeDocumentData",
    default:{documentId:null,documentName:null}
})
export const sidebarOpen = atom({
    key:"sidebarOpen",
    default:true
})


export const messages = atom<Array<Message>>({
    key:"messages",
    default:[]
})


export const searchResult = atom({
    key:'searchResult',
    default:null
})

export const isAIResultLoading = atom({
    key:'isAIResultLoading',
    default:false
})


export const activeDocumentId = atom<string | null>({
    key:'activeDocumentId',
    default:null
})

export const isContentModalOpen = atom({
    key:"isContentModalOpen",
    default:false
})


export const isFileSelected = atom<File | null>({
    key:"isFileSelected",
    default:null
})

export const isDeleteModalOpen = atom<boolean>({
    key:"isDeleteModalOpen",
    default:false
})