import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "./components/Header"
import { Hello } from "./components/Hello";

ReactDOM.render(
    <>
    <Hello compiler="TypeScript" framework="React" />
    <Header/></>,
    document.getElementById("example")
);