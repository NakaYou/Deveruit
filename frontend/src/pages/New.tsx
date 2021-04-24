import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { errorSelector } from "recoil";

type FormInput = {
  title: string;
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
  } = useForm<FormInput>();
  const onSubmit = (data: any) => console.log(data);

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
  const defaultApprovalMessage =
    "一緒に開発しましょう:) よろしくお願いします！";
  const defaultRejectedMessage = "今回は申し訳ありません:(";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label>募集のタイトル</label>
          <br />
          <textarea
            className="w-1/2 h-15"
            placeholder={titlePlaceholder}
            {...register("title", { required: true, maxLength: 50 })}
          />
        </div>

        {/* TODO: <label>サムネイルの登録</label> */}
        <div className="mb-4">
          <label>募集要項</label>
          <br />
          <textarea
            className="w-1/2 h-40"
            placeholder={requirementsPlaceholder}
            {...register("requirements", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label>詳細説明</label>
          <br />
          <textarea
            className="w-1/2 h-40"
            placeholder={descriptionPlaceholder}
            {...register("description", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label>承認メッセージ</label>
          <br />
          <textarea
            className="w-1/2 h-20"
            defaultValue={defaultApprovalMessage}
            {...register("approvalMessage", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label>拒否メッセージ</label>
          <br />
          <textarea
            className="w-1/2 h-20"
            defaultValue={defaultRejectedMessage}
            {...register("rejectedMessage", { required: true })}
          />
        </div>

        <input
          className="p-2 bg-blue-600 rounded-full text-white"
          type="submit"
          value="募集をかける"
        />
      </form>
    </div>
  );
};

export default NewRecruitForm;
