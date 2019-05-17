import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
              <i class="fas fa-guitar fa-10x"></i>
              <br />

              <p>
                An app to take away all of the transposing headaches! 
                This app will accept a key and a scale and show you where to find all of the notes on a guitar fretboard!
              </p>
              
              <Link to = "/guitar">
                <button class = 'btn btn-lg btn-outline-danger'>
                  Go to guitar rendering page!
                </button>
              </Link>
            </div>
          )
          // return(
          //   <div>
          //     <h1 className = "mt-5 ml-5 pl-5"><strong>Guitar:</strong></h1>
          //     <Searcher />
          //   </div>
          // )
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
