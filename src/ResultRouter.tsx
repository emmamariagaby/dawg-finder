import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "./components/Form";
import ResultsContanier from "./components/ResultsContainer";

const ResultRouter: React.FC = () =>{
    return (
        <BrowserRouter>
            <Route path="/" component={Form} />
            <Route path="/a" component={ResultsContanier} />
        </BrowserRouter>   
    );
};

export default ResultRouter;