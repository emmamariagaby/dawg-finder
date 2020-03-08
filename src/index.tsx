import * as React from "react";
import * as ReactDOM from "react-dom";
// import { BrowserRouter as Router, BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultRouter from "./ResultRouter";
import Option from "./components/Option";

// import Form from "./components/Form";
import Button from "./components/Button";
import Container from "./components/Container";
// import ResultsContainer from "./components/ResultsContainer";
// import {FormRender} from "./components/Form";

// const RouteApp: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Route path="/" />
//       <Route path="/form" component={FormRender} />
//      </BrowserRouter>
//   );
// };



// export default function Index() {
//     return(
//         <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/components/Form">About</Link>
//             </li>
//             <li>
//               <Link to="/components/ResultsContanier">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch> 
//             <Route path="/components/Form">
//                 <Form />
//             </Route>
//             <Route path="/components/ResultsContanier">
//                 <ResultsContainer result="sällskap" />
//             </Route>
//             <Route path="/">
//                 <Form />
//             </Route>
//              </Switch>
//       </div>
//     </Router>
//     )
// }


ReactDOM.render(
    <>
        <Header />
        <ResultRouter />
        {/* <BrowserRouter>
            <Index />
        </BrowserRouter> */}
        <Option />
        {/* <Form /> */}
        {/* {this.RouteApp} */}
        <Button />
        <Container />
        {/* <ResultsContainer result="sällskap" /> */}
        <Footer />
    </>,
    document.getElementById("root")
);