import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  userName: number;
  imgPath: string;
};

const RecruitCard: FC<Props> = ({ id, title, userName, imgPath }) => {
  return (
    <div className="mx-auto grid grid-cols-4 w-1/2 bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
      <img
        className="m-auto p-2 h-32"
        height={10}
        src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.18169-9/14212218_1161308940593475_1506054425856239035_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=9267fe&_nc_ohc=Um18U8g01OMAX-yWf4k&_nc_ht=scontent-nrt1-1.xx&oh=9883e55201ff61bb3fb12052119d5d4b&oe=60AC8021"
        alt="サムネイル画像"
      />
      <div className="mt-3 mb-3 mr-3 grid col-span-3 grid-cols-1 grid-rows-3">
        <p className="text-left">企画者: {userName}</p>
        <div className="mt-2 row-span-2 font-bold text-xl text-left">
          {title}
        </div>

        <button className="my-auto ml-auto w-16	h-6 rounded-full bg-blue-600">
          <Link to={"/recruits/details/" + id}>詳細 </Link>
        </button>
      </div>
    </div>
  );
};

export default RecruitCard;
