import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RepairmanProfilePage from "../Pages/RepairmanProfilePage/RepairmanProfilePage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/search" component={LandingPage} />
          <Route exact path="/repairman/:id" component={RepairmanProfilePage} />
        </Router>
      </div>
    );
  }
}

export default App;
