import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./components/screens/HomeScreen";
import FormScreen from "./components/screens/FormScreen";
import DogScreen from "./components/screens/DogScreen";
import NavigationMenu from "./components/NavigationMenu";

import Button from "./components/Button";

ReactDOM.render(

  <Router>
    <div className="screen">
      <nav>
        <NavigationMenu>
          <Button to="/" className="fadeIn">Home</Button>
          <Button to="/find-your-dog" className="fadeIn">Find your dog!</Button>
          <Button to="/dogs" className="fadeIn">More dog breeds</Button>
        </NavigationMenu>
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
