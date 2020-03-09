import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Option from "./components/Option";
import Form from "./components/Form";
import Button from "./components/Button";
import Container from "./components/Container";
import ResultsContainer from "./components/ResultsContainer";

ReactDOM.render(
 
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form">Home</Link>
            </li>
            <li>
              <Link to="/resultContainer">About</Link>
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
            <Form />
          </Route>
          <Route path="/resultContainer">
            <ResultsContainer result="sällskap" />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>,
  


    // <>
    //     <Header />
    //     <Option />
    //     <Form />
    //     <Button />
    //     <Container />
    //     <ResultsContainer result="sällskap" />
    //     <Footer />
    // </>,
    document.getElementById("root")
);



// import * as React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import Form from "./components/Form";
// import ResultsContanier from "./components/ResultsContainer";

// const ResultRouter: React.FC = () =>{
//     return (
//         <BrowserRouter>
//             <Route path="/" component={Form} />
//             <Route path="/a" component={ResultsContanier} />
//         </BrowserRouter>   
//     );
// };

// export default ResultRouter;