import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import {ProjectProvider} from './components/ProjectContext/ProjectContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div style={{backgroundImage: 'url(/src/assets/WebsiteBackground.png)'}}>
        <Nav />
        <Switch>
          <Container>
          <ProjectProvider>
          <Route exact path="/" component={Portfolio} />
          </ProjectProvider>      
          </Container>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
