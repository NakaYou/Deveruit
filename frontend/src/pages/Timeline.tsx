import React, { FC } from "react";
import RecruitCard from "../components/RecruitCard";

type fetchedTimeLine = {
  id: number;
  created_user: number;
  img: string;
  detail: string;
  approval_msg: string;
  refusal_msg: string;
  title: string;
  created_at: string;
  updated_at: string;
};

type Props = {
  recruits: fetchedTimeLine[];
};
const TimeLine: FC<Props> = ({ recruits }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {recruits.map(({ id, title, created_user, img }) => (
        <RecruitCard
          id={id}
          title={title}
          userName={created_user}
          imgPath={img}
        />
      ))}
    </div>
  );
};

export default TimeLine;
