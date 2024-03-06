import {SendToUserPage} from "./Navigation"
import {useState} from "react";
import LeftSide from "./MainLeft"
import MainFeedCenter from "./MainFeedCenter";
import RightSide from "./MainRight";
function MainScreen({username, userImg, mode, setMode, setLoggedIn,token}) {
    console.log(token);
    return (
        <>
            <div className="MainScreen">
                <LeftSide username={username}></LeftSide>
                <MainFeedCenter username={username} userImg={userImg} mode={mode} token={token}></MainFeedCenter>
                <RightSide setLoggedIn={setLoggedIn} mode={mode} setMode={setMode}username={username} userImg={userImg}></RightSide>
            </div>
        </>
    )
}

export default MainScreen;