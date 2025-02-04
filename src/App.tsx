import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"
import { QueryRoom } from "./pages/QueryRoom"


function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={    <Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/chat/:id" element={<QueryRoom/>}/>
      </Routes>
    </>
  )
}

export default App
