import React, { FC } from "react";
import MyRecruitCard from "../components/MyRecruitCard";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../atoms";
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
  userId: number;
  recruits: fetchedTimeLine[];
};

const MyRecruits: FC<Props> = ({ userId, recruits }) => {
  const navigate = useNavigate();
  const [login, _] = useRecoilState(loginState);

  if(userId === -1 || login.id !== userId) {
    navigate('/')
    return null;
  }

  const myRecruits = recruits.filter(
    (recruit) => recruit.created_user === userId
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {myRecruits.map(({ title, img, id }) => (
          <MyRecruitCard title={title} imgPath={img} id={id} />
        ))}
      </div>
    </>
  );
};

export default MyRecruits;
