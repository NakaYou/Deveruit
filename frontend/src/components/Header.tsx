import React, { FC, useState } from "react";
import { Link, Route } from "react-router-dom";
import menu from "../images/menu.png";
import close from "../images/close.png";

type MenuProps = {
  userName: string;
  iconPath: string;
};

type HeaderProps = {
  isLogin: boolean;
  userName: string;
  iconPath: string;
};

type SigninProps = {};

type BarProps = {
  isLogin: boolean;
  userName: string;
  iconPath: string;
};

const Signinbar: FC<SigninProps> = () => {
  return (
    <div className="flex ml-auto text-white text-3xl ">
      <Link to="/signup" className="mr-5 my-auto hover:text-gray-500">
        新規登録
      </Link>
      <Link to="/signin" className=" my-auto hover:text-gray-500">ログイン</Link>
    </div>
  );
};

const Menubar: FC<MenuProps> = ({ userName, iconPath }) => {
  const [isOpenedMenu, setmenu] = useState(false);
  if (isOpenedMenu)
    return (
      <div className="text-3xl text-right m-3 ml-auto mb-auto bg-green-300">
        <div className="flex ml-auto mb-auto">
          <img
            className="rounded-full h-20"
            src={"https://avatars.githubusercontent.com/u/72610232?v=4"}
            alt="アイコン"
          />
          <p className="  text-7xl ">{userName}</p>
          <img
            className="w-20 h-20"
            src={close}
            onClick={() => setmenu(!isOpenedMenu)}
          />
        </div>
        <div className="text-center leading-10 list-none">
          <li>
            <Link to="/">タイムライン</Link>
          </li>
          <li>
            <Link to="/notice">通知</Link>
          </li>
          <li>
            <Link to="/new">開発募集をかける</Link>
          </li>
          <li>
            <Link to="/:usrename/recruits">自分の募集</Link>
          </li>
          <li>
            <Link to="/logout">ログアウト</Link>
          </li>
        </div>
      </div>
    );
  else
    return (
      <div className="flex ml-auto mb-auto mt-auto ">
        <img
          className="rounded-full h-20 m-3 mr-0"
          src={"https://avatars.githubusercontent.com/u/72610232?v=4"}
          alt="アイコン"
        />
        <p className=" mt-3 mr-3 text-7xl mt-0 ">{userName}</p>
        <img
          className="w-20 h-20"
          src={menu}
          onClick={() => setmenu(!isOpenedMenu)}
        />
      </div>
    );
};

const Bar: FC<BarProps> = ({ isLogin, userName, iconPath }) => {
  if (isLogin) {
    return <Menubar userName={userName} iconPath={iconPath} />;
  } else {
    return <Signinbar />;
  }
};

const Header: FC<HeaderProps> = ({ isLogin, userName, iconPath }) => {
  return (
    <div className="flex">
      <div className="p-5 bg-green-300 flex mb-auto w-full">
        <Link to="/" className="text-7xl text-white">Deveruit</Link>
        <Bar isLogin={isLogin} userName={userName} iconPath={iconPath} />
      </div>
    </div>
  );
};

export default Header;
