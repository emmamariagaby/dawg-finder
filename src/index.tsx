import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./components/screens/HomeScreen";
import FormScreen from "./components/screens/FormScreen";
import DogScreen from "./components/screens/DogScreen";

ReactDOM.render(
 
    <Router>
      <div className="screen">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/find-your-dog">Find your dog!</Link>
            </li>
            <li>
              <Link to="/dogs">More dog breeds</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
           <Route path="/find-your-dog">
            <FormScreen />
          </Route>
          <Route path="/dogs">
            <DogScreen />
          </Route>
           <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>,
  
    document.getElementById("root")
);
