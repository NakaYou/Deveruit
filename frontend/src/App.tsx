import React from "react";
import logo from "./logo.svg";
import TimeLine from "./pages/Timeline";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NewRecruitForm from "./pages/New";
import Detail from "./pages/Detail";
import Notice from "./pages/Notice";
import Recruits from "./pages/Recruits";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TimeLine />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/new" element={<NewRecruitForm />} />
      <Route path="/recruits/details/:id" element={<Detail />} />
      <Route path="/:username/notice" element={<Notice />} />
      <Route path="/:username/recruits" element={<Recruits />} />
    </Routes>
  );
}

export default App;
