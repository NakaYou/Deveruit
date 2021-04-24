import React, { FC } from "react";
import RecruitCard from "../components/RecruitCard";

type fetchedTimeLine = {
  id: string;
  title: string;
  userName: string;
  imgPath: string;
};
const TimeLine: FC = () => {
  // server側から取得
  const timeline: fetchedTimeLine[] = [
    {
      id: "1",
      title: "hoge",
      userName: "hogehoge",
      imgPath:
        "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
    },
    {
      id: "2",
      title: "hoge",
      userName: "hogehoge",
      imgPath:
        "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
    },
    {
      id: "3",
      title: "hoge",
      userName: "hogehoge",
      imgPath:
        "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
    },
  ];

  return (
    <>
      {timeline.map(({ id, title, userName, imgPath }) => (
        <RecruitCard
          id={id}
          title={title}
          userName={userName}
          imgPath={imgPath}
        />
      ))}
    </>
  );
};

export default TimeLine;
