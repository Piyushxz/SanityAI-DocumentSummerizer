import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"
import { QueryRoom } from "./pages/QueryRoom"
import { Modal } from "./components/AddContentModal"
import { useRecoilValue } from "recoil"
import { isContentModalOpen } from "./atoms"
import { Toaster } from "sonner"
import { AnimatePresence } from "motion/react"

function App() {
  const isContentModalOp = useRecoilValue(isContentModalOpen)
  return (

    <>
      <Toaster theme="dark" richColors/>

      <AnimatePresence>
        {isContentModalOp && <Modal />}
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
