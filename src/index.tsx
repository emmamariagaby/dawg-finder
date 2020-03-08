import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Option from "./components/Option";
import Form from "./components/Form";
import Button from "./components/Button";
import Container from "./components/Container";
import ResultsContainer from "./components/ResultsContainer";

ReactDOM.render(
    <>
        <Header />
        <Option />
        <Form />
        <Button />
        <Container />
        <ResultsContainer result="sällskap" />
        <Footer />
    </>,
    document.getElementById("root")
);
