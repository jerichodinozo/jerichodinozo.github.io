import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './style.css'
import Home from './pages/homepage'
import Workpage from './pages/workpage'
import Background from './pages/background'
import Contact from './pages/contact'
export default function App() {
  return (
    <>

    {/*<div>hi</div>
    <div>test</div>
    <homepage>s</homepage>*/}
    <Router>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="work" element={<Workpage/>} />
        <Route path="background" element={<Background/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>

    </Router>

    </>
    
    
  )
}
