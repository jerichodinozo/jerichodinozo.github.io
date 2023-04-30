import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom"
import './style.css'
import homepage from './pages/homepage.js'
export default function App() {
  return (
    <Switch>
    <Route exact path="/" component={homepage} />
  </Switch>
  
    
  )
}
