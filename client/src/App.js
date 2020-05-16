import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getToken } from './axiosWithAuth';
import PrivateRoute from './PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path='/bubbles' />
      </div>
    </Router>
  );
}

export default App;
