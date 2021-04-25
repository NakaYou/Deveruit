import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { loginState } from "../atoms";
import { useRecoilState } from "recoil";
import axios from "axios";

const titlePlaceholder =
  "サポーターズのハッカソンに一緒に出場してくれるメンバーを募集！";

const descriptionPlaceholder = `僕はReact・TypeScriptを普段書いているので、フロントエンドに関してはReactが書ける人が良いです！
どういうものを作るかはメンバーが揃い次第決めたいです。
よろしくお願いします！`;
const defaultApprovalMessage = "一緒に開発しましょう:) よろしくお願いします！";
const defaultRejectedMessage = "今回は申し訳ありません:(";

// TODO: エラ〜メッセージの位置を端に寄せる
// TODO: サーバにデータを送る（このときにユーザーIDかなにかを付け足す必要がありそう）
// TODO: マークダウンで書けるようにしたい（？）

type FormInput = {
  created_user: string;
  img: File;
  detail: string;
  description: string;
  approval_msg: string;
  refusal_msg: string;
  title: string;
};

const NewRecruitForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>({
    reValidateMode: "onSubmit",
    shouldFocusError: false,
  });
  // TODO: サーバーサイド側にデータを送る
  const onSubmit = (data: FormInput) => {
    const sendData = { ...data, id: login.id };
    console.log(sendData);
    axios
      .post("https://deveruit-api2.herokuapp.com/api/recruit/", sendData, {
        headers: {
          Authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const [login, setLogin] = useRecoilState(loginState);
  return (
    <div className="w-3/4 mx-auto">
      <form
        className="flex flex-col justify-center text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 px-auto">
          <label>募集のタイトル</label>
          <br />
          <textarea
            className={`w-3/4 h-15  ${
              errors.title?.type ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={titlePlaceholder}
            {...register("title", { required: true, maxLength: 50 })}
          />
          <br></br>
          <div className="text-red-500 text-sm">
            {errors?.title?.type === "maxLength" &&
              "タイトルは50文字以下にして下さい"}
            {errors?.title?.type === "required" && "タイトルは必須です"}
          </div>
        </div>

        {/* TODO: <label>サムネイルのバリデーション（後回し）</label> */}
        <div className="mb-4">
          <label>サムネイルの登録</label>
          <br />
          <input
            className="mt-2"
            type="file"
            {...register("img", { required: false })}
          />
        </div>

        <div className="mb-4">
          <label>詳細説明</label>
          <br />
          <textarea
            className={`w-3/4 h-40 border-gray-300 ${
              errors.detail?.type ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={descriptionPlaceholder}
            {...register("detail", { required: true })}
          />
          <br />
          <p className="text-red-500  text-sm">
            {errors?.detail?.type === "required" && "詳細説明は必須です"}
          </p>
        </div>
        <div className="mb-4">
          <label>承認メッセージ</label>
          <br />
          <textarea
            className={`w-3/4 h-20 border-gray-300 ${
              errors.approval_msg?.type ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={defaultApprovalMessage}
            {...register("approval_msg", { required: true })}
          />
          <br />
          <div className="text-red-500 text-sm">
            {errors?.approval_msg?.type === "required" &&
              "承認メッセージは必須です"}
          </div>
        </div>
        <div className="mb-4">
          <label>拒否メッセージ</label>
          <br />
          <textarea
            className={`w-3/4 h-20 border-gray-300 ${
              errors.refusal_msg?.type ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={defaultRejectedMessage}
            {...register("refusal_msg", { required: true })}
          />
          <br />
          <div className="text-red-500  text-sm">
            {errors?.refusal_msg?.type === "required" &&
              "拒否メッセージは必須です"}
          </div>
        </div>

        <input
          className="p-2 w-28 mx-auto bg-blue-600 rounded-full text-white hover:bg-opacity-90"
          type="submit"
          value="募集をかける"
        />
      </form>
    </div>
  );
};

export default NewRecruitForm;
