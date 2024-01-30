import {BackToMenu} from "./Navigation"
import './Feed.css'
function LeftSide() {
    return (
        <>
            <div className="column LeftAlign TopBar">
            <span id="Logo" onClick={BackToMenu}>Hey</span>
            <input placeholder="Search App"></input>
            </div>
        </>
    )
}

function Center() {
    return (
        <>
            <div className="column CenterAlign TopBar">
                <button>Home</button>
                <button>Friends</button>
                <button>Groups</button>
            </div>
        </>
    )
}

function RightSide() {
    return (
        <>
            <div className="column RightAlign TopBar">
                <button>Find friends</button>
                <button>Menu</button>
                <button>Message</button>
                <button>Notifications</button>
                <button>UserInfo</button>
            </div>
        </>
    )
}
function InfoBar() {
    return (
        <>
            <div className="container">
                <LeftSide></LeftSide>
                <Center></Center>
                <RightSide></RightSide>
            </div>
        </>
    )
}

export default InfoBar