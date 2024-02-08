import {SendToUserPage} from "./Navigation"
import {useState} from "react";
import LeftSide from "./MainLeft"
import MainFeedCenter from "./MainFeedCenter";
import RightSide from "./MainRight";
function MainScreen({username, userImg, mode, setMode}) {
    return (
        <>
            <div className="MainScreen">
                <LeftSide username={username}></LeftSide>
                <MainFeedCenter username={username} userImg={userImg} mode={mode}></MainFeedCenter>
                <RightSide mode={mode} setMode={setMode}></RightSide>
            </div>
        </>
    )
}

export default MainScreen;