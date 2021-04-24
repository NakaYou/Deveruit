import React, { FC } from "react";

type fetchedDetails = {
  title: string;
  userName: string;
  iconPath: string;
  imgPath: string;
  requirements: string;
  description: string;
};

const Details: FC = () => {
  //server側から取得
  const details: fetchedDetails[] = [
    {
      title: "ほにゃららの共同開発",
      userName: "UserName",
      iconPath: "https://avatars.githubusercontent.com/u/72610232?v=4",
      imgPath:
        "https://i.pinimg.com/originals/dc/91/f8/dc91f8a9e28d9ce60fab321b34980167.png",
      requirements: "フロントができる人",
      description: "楽しく頑張りましょー",
    },
  ];
  return (
    <>
      {details.map(
        ({ title, userName, imgPath, iconPath, requirements, description }) => (
          <div className="text-center w-full text-2xl">
            <div className="m-10">{title}</div>
            <div className="ms-auto m-10">
              <img
                src={imgPath}
                className="m-10 h-64 mx-auto shadow-2xl rounded-md"
              />
            </div>
            <div className="m-10">
              企画者
              <img
                src={iconPath}
                className="m-10 mt-7 mb-3 mx-auto h-20 rounded-full"
              />
              {userName}
            </div>
            <div className="m-10 my-3">
              募集要項
              <br />
              <div className="mx-auto p-10 m-10 my-3 mb-7 bg-gray-300 w-1/3 rounded-md text-xl">
                {requirements}
              </div>
            </div>
            <div className="m-10 my-2">
              募集の詳細
              <br />
              <div className="mx-auto p-10 m-10 my-3 mb-7 bg-gray-300 w-1/3 rounded-md text-xl">
                {description}
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
        )
      )}
    </>
  );
};

export default Details;
