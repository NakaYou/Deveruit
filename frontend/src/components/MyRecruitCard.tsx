import React, { FC } from "react";

type Props = {
  title: string;
  imgPath: string;
};

const MyRecruitCard: FC<Props> = ({ title, imgPath }) => {
  // TODO: 削除時の処理を記述
  const deleteHandler = () => {};
  return (
    <div className="mx-auto grid grid-cols-2 grid-rows-1 w-3/4 bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
      <img className="m-auto p-2" src={imgPath} alt="サムネイル画像" />
      <div className="mr-3 grid grid-cols-1 grid-rows-3">
        <div className="my-auto row-span-2 font-bold text-lg text-left">{title}</div>
        <button
          className="my-auto ml-auto w-20	h-8 rounded-lg bg-red-600"
          onClick={deleteHandler}
        >
          <span>削除</span>
        </button>
      </div>
    </div>
  );
};

export default MyRecruitCard;
