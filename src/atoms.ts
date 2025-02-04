import { atom } from "recoil";

export const sidebarOpen = atom({
    key:"sidebarOpen",
    default:true
})


export const messages = atom<Array<string>>({
    key:"messages",
    default:[]
})