import React from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter";
import power from "remote/power";
import "./index.css";
import Subcomp from "./Subcomp";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <Counter />
    <Subcomp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
