import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Option from "./components/Option";
import Form from "./components/Form";
import Button from "./components/Button";
import Container from "./components/Container";
import DogText from "./components/DogText";
import DogInfo from "./components/DogInfo";
import DogImage from "./components/DogImage";



ReactDOM.render(
    <>
    <Header/>
    <Option/>
    <Form/>
    <Button/>
    <Container/>
    <DogText/>
    <DogInfo/>
    <DogImage/>
    <Footer/></>,
    document.getElementById("root")
);