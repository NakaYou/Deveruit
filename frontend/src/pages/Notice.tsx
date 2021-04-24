import React, { FC } from "react";
import NoticeCard from "../components/NoticeCard"
import Header from "../components/Header"

type fetchedNotice = {
    cardtype: "sinsei" | "syounin" | "kyohi";
    title: string;
    userName: string;
    iconPath: string;
    message: string;
};
const Notice: FC = () => {
    // server側から取得
    const notice: fetchedNotice[] = [
        {
            cardtype: "sinsei",
            title: "hoge",
            userName: "hogehoge",
            iconPath:
                "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
            message: "a"
        },
        {
            cardtype: "syounin",
            title: "hoge",
            userName: "hogehoge",
            iconPath:
                "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
            message: "i"
        },
        {
            cardtype: "kyohi",
            title: "hoge",
            userName: "hogehoge",
            iconPath:
                "https://pbs.twimg.com/profile_images/908551383275548677/2xi0tEIl_400x400.jpg",
            message: "a",
        },
    ];
    return (
        <>
    <Header isLogin={true} userName={"NakaYou"} iconPath="https://avatars.githubusercontent.com/u/72610232?v=4" />
            {notice.map(({ cardtype, title, userName, iconPath, message }) => (
                <NoticeCard
                    cardtype={cardtype}
                    title={title}
                    userName={userName}
                    iconPath={iconPath}
                    message={message}
                />
            ))}
        </>
    );
};

export default Notice;