import React, { FC } from "react";
import MyRecruitCard from "../components/MyRecruitCard";

// 仮のデータ型
// TODO: バックエンドからどういうデータが来るかを見る
type fetchedRecruitment = {
  title: string;
  imgPath: string; // URL型にする？
};

const MyRecruits = () => {
  // deveruit-recruitmentテーブルのデータを取得
  // TODO: ここをaxiosでサーバーから取得。useEffectを使う（userIdがいるはず）
  const myRecruits: fetchedRecruitment[] = [
    {
      title: "hogehoge",
      imgPath:
        "http://s3-ap-northeast-1.amazonaws.com/i.schoo/images/teacher/2869.jpg",
    },
    {
      title: "hogehoge",
      imgPath:
        "http://s3-ap-northeast-1.amazonaws.com/i.schoo/images/teacher/2869.jpg",
    },
    {
      title: "hogehoge",
      imgPath:
        "http://s3-ap-northeast-1.amazonaws.com/i.schoo/images/teacher/2869.jpg",
    },
  ];

  return (
    <>
      {/* //TODO: カードの間の隙間がないので作る  */}
      <div className="grid grid-cols-1 gap-4">
        {myRecruits.map(({ title, imgPath }) => (
          <MyRecruitCard title={title} imgPath={imgPath} />
        ))}
      </div>
    </>
  );
};

export default MyRecruits;
