import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Dashboard } from "./pages/DashBoard"
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={    <Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App;
