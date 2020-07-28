import React from 'react'
import { Switch, Route } from "react-router-dom"
import Homepage from "./Homepage/index"
import './App.css'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>      
    </div>
  )
}

export default App
