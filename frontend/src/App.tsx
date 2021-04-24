import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

import NoticeCard from "./components/NoticeCard";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <NoticeCard cardtype="syounin" userName="NakaYou" iconPath="https://avatars.githubusercontent.com/u/72610232?v=4"
        title="共同開発のタイトル" message="こんにちは" />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
