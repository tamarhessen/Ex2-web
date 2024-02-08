import InfoBar from "./InfoBar";
import MainScreen from "./MainScreen";
import { useState } from "react";
import './LightModeFeed.css';
import './NightModeFeed.css';
import { useLocation } from 'react-router-dom';

function FeedScreen() {
    const [mode, setMode] = useState(true);
    const location = useLocation();
    const { state } = location;
    
    const { displayName, profilePicture } = location.state;

    // Convert file object to URL
    const profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : null;

    return (
        <>
            <title>Feed</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                  integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossOrigin="anonymous"/>
            <div className={mode ? "light-mode" : "night-mode"}>
                {/* Assuming profilePicture is a file object */}
                {profilePictureURL && <InfoBar userImg={profilePictureURL}></InfoBar>}
                <MainScreen username={displayName} userImg={profilePictureURL} mode={mode} setMode={setMode}></MainScreen>
            </div>
        </>
    );
}

export default FeedScreen;
