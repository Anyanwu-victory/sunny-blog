import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Footer from "./pages/Footer";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={<Home/>}/>      
             <Route path="/blog" element={<Blog/>}/> 
             <Route path="/blog/:slug" element={<SinglePost/>}/> 
             <Route path="/footer" element={<Footer/>}/>   
             <Route path="*" element={<Error/>}/> 
         </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;
