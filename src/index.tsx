import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router, BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/screens/Home";
import FormScreen from "./components/screens/FormScreen";

import ResultScreen from "./components/screens/ResultScreen";
import DogScreen from "./components/screens/DogScreen";

import Footer from "./components/Footer";
import ResultRouter from "./ResultRouter";
import Option from "./components/Option";

import Form from "./components/Form";
import Button from "./components/Button";
import Container from "./components/Container";
import ResultsContainer from "./components/ResultsContainer";

import "./styles/main.css"
// import ResultsContainer from "./components/ResultsContainer";
// import {FormRender} from "./components/Form";


ReactDOM.render(
 
    <Router>
      <div className="screen">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/results">About</Link>
            </li>
            <li>
              <Link to="/dogscreen">DogPage</Link>
            </li>
            <li>
              <Link to="/footer">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
           <Route path="/form">
            <FormScreen />
          </Route>
          <Route path="/results">
            <ResultScreen />
          </Route>
          <Route path="/dogscreen">
            <DogScreen />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
           <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>,
  
    document.getElementById("root")
);
