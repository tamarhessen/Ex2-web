import InfoBar from "./InfoBar"
import MainScreen from "./MainScreen"
import {useState} from "react";
import './LightModeFeed.css'
import './NightModeFeed.css'

function FeedScreen() {
    const [mode, setMode] = useState(true)

    return (<>
        <title>Feed</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossOrigin="anonymous"/>
        <div className={mode ? "light-mode" : "night-mode"}>
        <InfoBar></InfoBar>
        <MainScreen username={"hello world"} userImg={"abc"}></MainScreen>
        </div>
    </>)
}

export default FeedScreen;