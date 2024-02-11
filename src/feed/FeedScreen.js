import InfoBar from "./InfoBar";
import MainScreen from "./MainScreen";
import { useState } from "react";
import './LightModeFeed.css';
import './NightModeFeed.css';
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function FeedScreen() {
    console.log("hi2")
    const [mode, setMode] = useState(true);
    const location = useLocation();
    const { state } = location;
    
    const { displayName, profilePicture, setLoggedIn} = location.state;
    console.log(setLoggedIn)
    // Convert file object to URL
    const profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : null;

    return (
        <>
            <title>Feed</title>
            <div className={mode ? "light-mode" : "night-mode"}>
                {/* Assuming profilePicture is a file object */}
                {profilePictureURL && <InfoBar userImg={profilePictureURL}></InfoBar>}
                <MainScreen username={displayName} userImg={profilePictureURL} mode={mode} setMode={setMode}></MainScreen>
            </div>
        </>
    );
}

export default FeedScreen;
