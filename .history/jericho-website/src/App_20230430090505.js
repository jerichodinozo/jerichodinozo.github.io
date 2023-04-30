import React from "react";
import ReactDOM from "react-dom";
import { Route, Route } from "react-router-dom"
import './style.css'
import homepage from './pages/homepage.js'
export default function App() {
  return (
    <Route>
    <Route exact path="/" component={homepage} />
    </Route>
  
    
  )
}
