import React, { FC } from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  email: string;
  password: string;
};

const Signin: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>({
    reValidateMode: "onSubmit",
    shouldFocusError: false,
  });
  // TODO: サーバーサイド側にデータを送る
  const onSubmit = (data: FormInput) => console.log(data);

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
              type="password"
              placeholder="パスワード"
              className="border-gray-300 rounded-full mb-4"
              {...register("password", { required: true })}
            />

            <input
              className="w-20 p-1 mx-auto bg-blue-600 rounded-full text-white hover:bg-opacity-90 outline-none"
              type="submit"
              value="ログイン"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
