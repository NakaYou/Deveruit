import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
