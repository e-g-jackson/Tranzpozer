import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Guitar from "./components/Guitar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path = "/" render = {() =>{
          return(
            <div className = "container text-center">
              <h1>The Tranzpozer App!</h1>
              <br />
              <p>
                The app to make all the guitar headaches go away...
              </p>
            </div>
          )
        }} />
        <Route exact path = "/guitar" render ={() => {
          return(
            <Guitar />
          )
        }}/>
      </Router>
    );
  }
}

export default App;
