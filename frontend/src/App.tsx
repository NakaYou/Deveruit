import React from "react";
import logo from "./logo.svg";
import TimeLine from "./pages/Timeline";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
import NewRecruitForm from "./pages/New";

import Details from "./pages/Details";
import Notice from "./pages/Notice";

import Recruits from "./pages/Recruits";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoticeCard from "./components/NoticeCard";
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header isLogin={false} userName="tommy" iconPath=""/>
    <Routes>
      <Route path="/" element={<TimeLine />} />
      {/* <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route path="/new" element={<NewRecruitForm />} />
      <Route path="/recruits/details/:id" element={<Details />} />
      <Route path="/:username/notice" element={<Notice />} />

      <Route path="/:username/recruits" element={<Recruits />} />
    </Routes>
    </>
  );
}

export default App;
