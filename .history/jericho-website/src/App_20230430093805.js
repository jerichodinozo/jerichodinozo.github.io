import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './style.css'
import homepage from './pages/homepage.js'
export default function App() {
  return (
    <>

    {/*<div>hi</div>
    <div>test</div>
    <homepage>s</homepage>*/}
    <Router>
   
      <Routes>
        <Route path="/" element={<homepage/>} />
      </Routes>
    </Router>

    </>
    
    
  )
}
