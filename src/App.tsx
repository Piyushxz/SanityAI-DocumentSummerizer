import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"
import { QueryRoom } from "./pages/QueryRoom"
import { Modal } from "./components/AddContentModal"
import { DeleteModal } from "./components/DeleteModal"
import { useRecoilValue } from "recoil"
import { isContentModalOpen, isDeleteModalOpen } from "./atoms"
import { Toaster } from "sonner"
import { AnimatePresence } from "motion/react"

function App() {
  const isContentModalOp = useRecoilValue(isContentModalOpen)
  const isDelModalOpen = useRecoilValue(isDeleteModalOpen)
  return (

    <>
      <Toaster theme="dark" richColors/>

      <AnimatePresence>
        {isContentModalOp && <Modal />}
        {isDelModalOpen && <DeleteModal/>}
      </AnimatePresence>


      <Routes>
        <Route path="/" element={    <Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/:id" element={<QueryRoom/>}/>
      </Routes>
    </>
  )
}

export default App
