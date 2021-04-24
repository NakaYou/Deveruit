import React, { FC } from "react";

type Props = {
    cardtype: "sinsei" | "syounin" | "kyohi";
    userName: string;
    iconPath: string;
    title: string;
    message: string;
}



const NoticeCard: FC<Props> = ({ cardtype, userName, iconPath, title, message }) => {
    const userlink: string= "https://github.com/" + userName;
    if (cardtype === 'sinsei') {
        return (
            <div className="m-10 mx-auto w-2/5 h-auto bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
                <div className=" text-center">
                    <div className="flex text-4xl">
                        <img src={iconPath} className="rounded-full h-20 m-5" />
                        <div className="mt-5">
                            <a href={userlink} className="text-blue-500 hover:underline">{userName}</a>さんが{title}に参加申請しました。
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            className=" w-20 mr-20 rounded-lg bg-white"
                            onClick={() => alert("syounin")} //SyouninHandlerを作る
                        >
                            <span className="text-green-300 text-4xl">承認</span>
                        </button>
                        <button
                            className="w-20 rounded-lg bg-white mb-10"
                            onClick={() => alert("kyohi")} //KyohiHandlerを作る
                        >
                            <span className="text-red-300 text-4xl">拒否</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    } else if (cardtype === 'syounin') {
        return (
            <div className="m-10 mx-auto w-2/5 pb-10 bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
                <div className="text-center">
                    <div className="flex text-4xl">
                        <img src={iconPath} className="rounded-full h-20 m-5" />
                        <div className="mt-5">
                            <a href={userlink} className="text-blue-500 hover:underline">{userName}</a>さんが{title}の参加申請を承認しました。
                        </div>
                    </div>
                    <div className=" mr-auto ml-auto p-20 bg-gray-500 text-4xl w-4/5 rounded-lg">
                            <div className="">{message}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="m-10 mx-auto w-2/5 pb-10 bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
                <div className="text-center">
                    <div className="flex text-4xl">
                        <img src={iconPath} className="rounded-full h-20 m-5" />
                        <div className="mt-5">
                            <a href={userlink} className="text-blue-500 hover:underline">{userName}</a>さんが{title}の参加申請を拒否しました。
                        </div>
                    </div>
                    <div className=" mr-auto ml-auto p-20 bg-gray-500 text-4xl w-4/5 rounded-lg">
                            <div className="">{message}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoticeCard;