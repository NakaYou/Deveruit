import React, { FC } from "react";

type Props = {
  title: string;
  imgPath: string;
};

const MyRecruitCard: FC<Props> = ({ title, imgPath }) => {
  // TODO: 削除時の処理を記述
  const deleteHandler = () => {};
  return (
    <div className="mx-auto h-32 grid grid-cols-4 grid-rows-1 w-1/3 bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
      <img className="mx-auto my-auto h-3/4" src={imgPath} alt="サムネイル画像" />
      <div className="mr-3 grid grid-cols-1 col-span-3 grid-rows-3">
        <div className="m-auto row-span-2 text-xl text-left">{title}</div>
        <button
          className="my-auto ml-auto w-16 h-8 rounded-full bg-red-600"
          onClick={deleteHandler}
        >
          <span>削除</span>
        </button>
      </div>
    </div>
  );
};

export default MyRecruitCard;
