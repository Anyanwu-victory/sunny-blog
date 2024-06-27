import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./component/Header";
import Home from "./container/Home";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Comment from "./pages/Comment";
import Contact from "./pages/Contact";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/about" element={<About/>}/>     
             <Route path="/blog" element={<Blog/>}/> 
             <Route path="/blog/:slug" element={<SinglePost/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/comments" element={<Comment/>}/>
             <Route path="/signin" element={<Signin/>}/> 
             <Route path="/footer" element={<Footer/>}/> 
             <Route path="/create" element={<Create/>}/>  
             <Route path="*" element={<Error/>}/> 
         </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;
