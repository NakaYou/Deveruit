import React, { FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormInput = {
  email: string;
  githubID: string;
  password: string;
};

const Signup: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>({
    reValidateMode: "onSubmit",
    shouldFocusError: false,
  });

  // TODO: サーバーサイド側にデータを送る
  const onSubmit = async (data: FormInput) => {
    const { email, githubID, password } = data;
    const res = await axios.post("/api/user/create", {
      github_url: `https://github.com/${githubID}`,
      email,
      password,
    });
    console.log(res);
  };

  // const passwordRef = useRef(null);

  return (
    <div className="flex h-screen">
      <div className="w-1/3  mx-auto my-auto p-10 border-gray-300 shadow-lg rounded-lg border">
        {/* <div className="mb-5 text-red-500 ">
          {"emailかパスワードが間違っています"}
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto grid grid-cols-1">
            <input
              type="text"
              placeholder="メールアドレス"
              className={`border-gray-300 rounded-full ${
                errors.email?.type ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: true,
                pattern: /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/i,
              })}
            />
            <div className="text-red-500 mb-4 text-xs">
              {errors.email?.type == "required" && "メールアドレスは必須です"}
              {errors.email?.type == "pattern" &&
                "メールアドレスの形式で入力してください"}
            </div>
            <input
              type="text"
              placeholder="GitHubアカウント(例: hoge22)"
              className={`border-gray-300 rounded-full ${
                errors.githubID?.type ? "border-red-500" : "border-gray-300"
              }`}
              {...register("githubID", { required: true })}
            />
            <div className="text-red-500 mb-4 text-xs">
              {errors.githubID?.type === "required" && "githubIDは必須です"}
            </div>
            <input
              type="password"
              placeholder="パスワード(8文字以上で入力してください)"
              className={`border-gray-300 rounded-full ${
                errors.password?.type ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", { required: true, minLength: 8 })}
            />
            <div className="text-red-500 mb-4 text-xs">
              {errors.password?.type === "required" && "パスワードは必須です"}
              {errors.password?.type === "minLength" &&
                "8文字以上で入力してください"}
            </div>

            {/* <input
              type="password"
              placeholder="パスワードの確認"
              className="border-gray-300 rounded-full mb-4"
            /> */}
            <input
              className="w-20 p-1 mx-auto bg-blue-600 rounded-full text-white hover:bg-opacity-90 outline-none"
              type="submit"
              value="新規登録"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
