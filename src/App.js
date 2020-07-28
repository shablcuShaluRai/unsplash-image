import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./Homepage/index"
import Modal from "./Modal"

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/photo/:id" component={(props) => <Modal {...props} />} />
      </Switch>      
    </div>
  );
}

export default App;
