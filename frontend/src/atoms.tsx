import { atom } from "recoil";

export const loginState = atom({
  key: "login",
  default: { id: -1, userName: "", iconPath: "", isLogin: false },
});