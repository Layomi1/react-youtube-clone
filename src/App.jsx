import Home from "./pages/home/home";
import Navbar from "./components/navbar/Navbar";
import Video from "./pages/video/Video";

import { Routes, Route } from "react-router-dom";


const App = () => {
  return <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<Video/>}/>
    </Routes>
  </>
}

export default App