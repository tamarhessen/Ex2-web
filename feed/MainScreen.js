import {SendToUserPage} from "./Navigation"
import {useState} from "react";
import LeftSide from "./MainLeft"
import MainFeedCenter from "./MainFeedCenter";
function MainScreen({username, userImg}) {

    return (
        <>
            <div className="MainScreen">
                <LeftSide username={username}></LeftSide>
                <MainFeedCenter username={username} userImg={userImg}></MainFeedCenter>
                <LeftSide username={username}></LeftSide>
            </div>
        </>
    )
}

export default MainScreen;