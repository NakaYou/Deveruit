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
            <div className="mx-auto w-2/5 h-auto bg-gray-300 rounded-lg hover:opacity-90 hover:shadow-lg">
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
                            onClick={SyouninHandler}
                        >
                            <span className="text-green-300 text-4xl">承認</span>
                        </button>
                        <button
                            className="w-20 rounded-lg bg-white mb-10"
                            onClick={KyohiHandler}
                        >
                            <span className="text-red-300 text-4xl">拒否</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    } else if (cardtype === 'syounin') {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default NoticeCard;