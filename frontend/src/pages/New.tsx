import React, { FC } from "react";
import { useForm } from "react-hook-form";

const titlePlaceholder =
  "サポーターズのハッカソンに一緒に出場してくれるメンバーを募集！";
const requirementsPlaceholder = `4/24-4/25 サポーターズハッカソン vol2
フロントエンド: 2人
バックエンド: 2人
インフラ: 2人
`;
const descriptionPlaceholder = `僕はReact・TypeScriptを普段書いているので、フロントエンドに関してはReactが書ける人が良いです！
どういうものを作るかはメンバーが揃い次第決めたいです。
よろしくお願いします！`;
const defaultApprovalMessage = "一緒に開発しましょう:) よろしくお願いします！";
const defaultRejectedMessage = "今回は申し訳ありません:(";

// TODO: エラ〜メッセージの位置を端に寄せる
// TODO: サーバにデータを送る（このときにユーザーIDかなにかを付け足す必要がありそう）
// TODO: マークダウンで書けるようにしたい（？）

type FormInput = {
  title: string;
  // thumbnail: File;
  requirements: string;
  description: string;
  approvalMessage: string;
  rejectedMessage: string;
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
  const onSubmit = (data: FormInput) => console.log(data);

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
            {...register("title", { required: true, maxLength: 5 })}
          />
          <br></br>
          <div className="text-red-500 text-sm">
            {errors?.title?.type === "maxLength" &&
              "タイトルは50文字以下にして下さい"}
            {errors?.title?.type === "required" && "タイトルは必須です"}
          </div>
        </div>

        {/* TODO: <label>サムネイルのバリデーション（後回し）</label> */}
        {/* <div className="mb-4">
          <label>サムネイルの登録</label>
          <br />
          <input type="file" {...register("thumbnail", { required: false })} />
        </div> */}
        <div className="mb-4">
          <label>募集要項</label>
          <br />
          <textarea
            className={`w-3/4 h-40 border-gray-300 ${
              errors.rejectedMessage?.type
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder={requirementsPlaceholder}
            {...register("requirements", { required: true })}
          />
          <br />
          <div
            className={`text-red-500  text-sm ${
              errors.requirements?.type ? "border-red-500" : "border-gray-300"
            }`}
          >
            {errors?.requirements?.type === "required" && "募集要項は必須です"}
          </div>
        </div>
        <div className="mb-4">
          <label>詳細説明</label>
          <br />
          <textarea
            className={`w-3/4 h-40 border-gray-300 ${
              errors.description?.type ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={descriptionPlaceholder}
            {...register("description", { required: true })}
          />
          <br />
          <p className="text-red-500  text-sm">
            {errors?.description?.type === "required" && "詳細説明は必須です"}
          </p>
        </div>
        <div className="mb-4">
          <label>承認メッセージ</label>
          <br />
          <textarea
            className={`w-3/4 h-20 border-gray-300 ${
              errors.approvalMessage?.type
                ? "border-red-500"
                : "border-gray-300"
            }`}
            defaultValue={defaultApprovalMessage}
            {...register("approvalMessage", { required: true })}
          />
          <br />
          <div className="text-red-500 text-sm">
            {errors?.approvalMessage?.type === "required" &&
              "承認メッセージは必須です"}
          </div>
        </div>
        <div className="mb-4">
          <label>拒否メッセージ</label>
          <br />
          <textarea
            className={`w-3/4 h-20 border-gray-300 ${
              errors.rejectedMessage?.type
                ? "border-red-500"
                : "border-gray-300"
            }`}
            defaultValue={defaultRejectedMessage}
            {...register("rejectedMessage", { required: true })}
          />
          <br />
          <div className="text-red-500  text-sm">
            {errors?.rejectedMessage?.type === "required" &&
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
