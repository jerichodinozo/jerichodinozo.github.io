import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './style.css'
import Home from './pages/homepage'
import Workpage from './pages/workpage'
import Background from 
export default function App() {
  return (
    <>

    {/*<div>hi</div>
    <div>test</div>
    <homepage>s</homepage>*/}
    <Router>
   
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

    </Router>

    </>
    
    
  )
}
