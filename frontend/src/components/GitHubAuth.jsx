import React, { useState } from "react";
import GitHubLogin from "react-github-login";
import axios from "axios";
import { loginState } from "../atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import github from "../images/Github_icon-icons.com_49946.png";
import loading from "../images/Preloader_9.gif";

const GitHubAuth = () => {
  const [_, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  const getAccessToken = (response) => {
    const code = response.code;
    setLoad(true)
    console.log(response);
    axios
      .post("https://github-auth-go-api.herokuapp.com/", {
        code: code,
      })
      .then((res) => {
        console.log("token:", res.data.token);
        localStorage.setItem("authToken", res.data.token);
        axios
          .get("https://deveruit-api2.herokuapp.com/api/user/", {
            headers: {
              Authorization: `Token ${res.data.token}`,
            },
          })
          .then((res) => {
            const { id, github_name, image } = res.data[0];
            setLogin({
              id,
              userName: github_name,
              iconPath: image,
              isLogin: true,
            });
            setTimeout(() => {
              setLoad(false)
              navigate("/");
            }, 100);
            
          });
      });
  };
  const [load, setLoad] = useState(false);
  return (
    <>
      <GitHubLogin
        className="mx-auto h-30  mt-24 py-2 px-2 focus:outline-none block border-black border rounded-full hover:border-purple-600 hover:text-purple-600"
        clientId="224561ede850fd53d6a2"
        redirectUri="http://localhost:3000/"
        onSuccess={getAccessToken}
        onFailure={(response) => console.log(response)}
      >
        {load && <img src={loading} />}
      </GitHubLogin>
    </>
  );
};

export default GitHubAuth;
