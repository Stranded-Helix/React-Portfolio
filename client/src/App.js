import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Portfolio} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
