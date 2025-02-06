import { atom } from "recoil";

interface Message{
    message:string,
    sentBy:'user' | 'bot'
}
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