import React, { FC } from "react";
import { useParams } from "react-router";

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
const Details: FC<Props> = ({ recruits }) => {
  const { id } = useParams();
  const { title, created_user, img, detail } = recruits[parseInt(id) - 1];
  return (
    <>
      <div className="text-center w-full text-2xl">
        <div className="m-10">{title}</div>
        <div className="ms-auto m-10">
          <img
            src={img}
            className="m-10 h-64 mx-auto shadow-2xl rounded-md"
          />
        </div>
        <div className="m-10">
          企画者<br/>
          {created_user}さん
        </div>
        <div className="m-10 my-3">
          募集説明
          <br />
          <div className="mx-auto p-10 m-10 my-3 mb-7 bg-gray-300 w-1/3 rounded-md text-xl">
            {detail}
          </div>
        </div>
        <div className="mb-20">
          <button
            className="bg-blue-500 px-3 py-2 text-white text-xl rounded-full"
            onClick={() => alert("TODO SubmitHandlerを作る")} //SubmitHandlerを作る
          >
            参加申請
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
