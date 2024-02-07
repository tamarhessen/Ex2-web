import InfoBar from "./InfoBar"
import MainScreen from "./MainScreen"
import {useState} from "react";
import './LightModeFeed.css'
import './NightModeFeed.css'
import { useLocation } from 'react-router-dom';

function FeedScreen() {
    const [mode, setMode] = useState(true)
    const location = useLocation();
    const { state } = location;
    const { displayname, profilePicture } = state;

    return (<>
        <title>Feed</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossOrigin="anonymous"/>
        <div className={mode ? "light-mode" : "night-mode"}>
        <InfoBar userImg={URL.createObjectURL(profilePicture)}></InfoBar>
        <MainScreen username={displayname} userImg={URL.createObjectURL(profilePicture)} mode={mode} setMode={setMode}></MainScreen>
        </div>
    </>)
}

export default FeedScreen;




// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function FeedScreen() {
//   const location = useLocation();
//   const { state } = location;

//   if (!state || !state.username || !state.profilePicture) {
//     // Handle case where user details are not available
//     return <div>Error: User details not found.</div>;
//   }

//   const { username, profilePicture } = state;

//   // Use username and profilePicture as needed in your FeedScreen component
//   return (
//     <div>
//       <h1>Welcome, {username}</h1>
//       <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
//       {/* Other feed screen content */}
//     </div>
//   );
// }

// export default FeedScreen;
