import React, { useEffect, useState } from "react";
import TimeLine from "./pages/Timeline";
import Signup from "./pages/Signup";
import NewRecruitForm from "./pages/New";

import Details from "./pages/Details";
import Notice from "./pages/Notice";

import Recruits from "./pages/Recruits";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoticeCard from "./components/NoticeCard";
import Header from "./components/Header";
import { loginState } from "./atoms";
import { useRecoilState } from "recoil";
import axios from "axios";

type fetchedTimeLine = {
  id: number;
  created_user: number;
  img: string;
  detail: string;
  approval_msg: string;
  refusal_msg: string;
  title: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [login, setLogin] = useRecoilState(loginState);
  const [recruits, setRecruits] = useState<fetchedTimeLine[]>([]);
  // server側から取得
  useEffect(() => {
    axios
      .get("https://deveruit-api2.herokuapp.com/api/recruit/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setRecruits([...recruits, ...res.data]);
      });
  }, []);

  return (
    <>
      <Header
        isLogin={login.isLogin}
        userName={login.userName}
        iconPath={login.iconPath}
      />
      <Routes>
        <Route path="/" element={<TimeLine recruits={recruits} />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/new" element={<NewRecruitForm />} />
        <Route
          path="/recruits/details/:id"
          element={<Details recruits={recruits} />}
        />
        <Route path="/:username/notice" element={<Notice />} />

        <Route path="/:username/recruits" element={<Recruits userId={login.id} recruits={recruits} />}/>
      </Routes>
    </>
  );
}

export default App;
