import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"
import { QueryRoom } from "./pages/QueryRoom"
import { Modal } from "./components/AddContentModal"
import { useRecoilValue } from "recoil"
import { isContentModalOpen } from "./atoms"
import { Toaster } from "sonner"


function App() {
  const isContentModalOp = useRecoilValue(isContentModalOpen)
  return (

    <>
      <Toaster theme="dark"/>

    {
      isContentModalOp &&
      <Modal/>

    }

      <Routes>
        <Route path="/" element={    <Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/chat/:id" element={<QueryRoom/>}/>
      </Routes>
    </>
  )
}

export default App
