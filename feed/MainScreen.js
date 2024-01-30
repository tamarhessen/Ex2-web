import {SendToUserPage} from "./Navigation"
import {useState} from "react";
import LeftSide from "./MainLeft"
import MainFeedCenter from "./MainFeedCenter";
function MainScreen({username}) {



    return (
        <>
            <div className="container MainScreen">
                <LeftSide username={username}></LeftSide>
                <MainFeedCenter username={username}></MainFeedCenter>
                <LeftSide username={username}></LeftSide>
            </div>
        </>
    )
}

export default MainScreen;