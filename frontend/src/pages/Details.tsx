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
            imgPath: "https://i.pinimg.com/originals/dc/91/f8/dc91f8a9e28d9ce60fab321b34980167.png",
            requirements: "フロントができる人",
            description: "楽しく頑張りましょー",
        }];
    return (
        <>
            {details.map(({ title, userName, imgPath, iconPath, requirements, description }) => (
                <div className="text-center w-full text-5xl">
                    <div className="m-10">{title}</div>
                    <div className="ms-auto m-10"><img src={imgPath} className="m-10 w-1/2 mx-auto shadow-2xl rounded-md" /></div>
                    <div className="m-10">企画者<img src={iconPath} className="m-10 mx-auto h-20 rounded-full" />{userName}</div>
                    <div className="m-10">募集要項
                <br /><div className="mx-auto p-10 m-10 bg-gray-300 w-1/2 rounded-md">{requirements}</div>
                    </div>
                    <div className="m-10">募集の詳細
                <br /><div className="mx-auto p-10 m-10 bg-gray-300 w-1/2 rounded-md">{description}</div>
                    </div>
                    <div className="mb-20">
                        <button className="bg-blue-500 p-10 text-white rounded-md"
                            onClick={() => alert("TODO SubmitHandlerを作る")}//SubmitHandlerを作る
                        >
                            参加申請
                </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Details;