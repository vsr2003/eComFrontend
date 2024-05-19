import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Shared/Footer"
import Navbar from "./Components/Shared/Navbar"
import Home from "./Pages/Home"
import ProductDescription from "./Pages/ProductDescription"


const App = () => {
  return (
    <div className=" overflow-x-hidden w-screen  ">
      <Navbar/>
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<ProductDescription/>} />
        </Routes>
      

      <Footer/>
    </div>
  )
}

export default App