import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './style.css'
import Home from './pages/homepage'
export default function App() {
  return (
    <>

    {/*<div>hi</div>
    <div>test</div>
    <homepage>s</homepage>*/}
    <Router>
   
      <Routes>
        <Route path="/" element={<homepage>} />
      </Routes>

    </Router>

    </>
    
    
  )
}
