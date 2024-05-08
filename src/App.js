import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./component/Header";
import Home from "./container/Home";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/about" element={<About/>}/>     
             <Route path="/blog" element={<Blog/>}/> 
             <Route path="/blog/:slug" element={<SinglePost/>}/> 
             <Route path="/footer" element={<Footer/>}/>   
             <Route path="*" element={<Error/>}/> 
         </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;
