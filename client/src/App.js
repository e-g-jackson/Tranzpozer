import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searcher from "./components/Searcher";

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
        <Route path = "/guitar" render ={() => {
          return(
            <div>
              <h1 className = "mt-5 ml-5 pl-5"><strong>Guitar:</strong></h1>
              <Searcher />
            </div>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
