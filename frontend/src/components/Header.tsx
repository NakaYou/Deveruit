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
      <Link to="/signin" className=" my-auto hover:text-gray-500">
        ログイン
      </Link>
    </div>
  );
};

const Menubar: FC<MenuProps> = ({ userName, iconPath }) => {
  const [isOpenedMenu, setmenu] = useState(false);

  return (
    <div className="flex ml-auto relative">
      <div className="flex my-auto z-40">
        <img
          className="rounded-full h-10 mr-1"
          src={"https://avatars.githubusercontent.com/u/72610232?v=4"}
          alt="アイコン"
        />
        <p className="text-3xl mr-2">{userName}</p>
      </div>
      {isOpenedMenu ? (
        <>
          <img
            className="my-3 w-8 h-8 z-40 mr-2 my-auto"
            src={close}
            onClick={() => setmenu(!isOpenedMenu)}
          />
          <div className="absolute text-center w-full bg-green-200 leading-10 list-none top-0 right-0 shadow-xl z-0">
            <li className="mt-20">
              <Link to="/" className="hover:text-gray-500">
                タイムライン
              </Link>
            </li>
            <li>
              <Link to="/notice" className="hover:text-gray-500">
                通知
              </Link>
            </li>
            <li>
              <Link to="/new" className="hover:text-gray-500">
                開発募集をかける
              </Link>
            </li>
            <li>
              <Link to="/:usrename/recruits" className="hover:text-gray-500">
                自分の募集
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-gray-500">
                ログアウト
              </Link>
            </li>
          </div>
        </>
      ) : (
        <img
          className="my-3 w-8 h-8 mr-2 my-auto"
          src={menu}
          onClick={() => setmenu(!isOpenedMenu)}
        />
      )}
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
  isLogin = true;
  return (
    <div className="flex mb-20">
      <div className="p-5 pr-0 pt-0 bg-green-300 flex w-full">
        <Link to="/" className="text-7xl text-white">
          Deveruit
        </Link>
        <Bar isLogin={isLogin} userName={userName} iconPath={iconPath} />
      </div>
    </div>
  );
};

export default Header;
