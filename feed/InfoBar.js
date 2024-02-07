import {BackToMenu} from "./Navigation"


function LeftSide() {
    return (
        <>
            <div className="column LeftAlign TopBar">
            <img src="https://live.staticflickr.com/65535/53506197898_55318ce5f5_t.jpg" id="Logo" onClick={BackToMenu}/>
            <input placeholder="Search App"></input>
            </div>
        </>
    )
}

function Center() {
    return (
        <>
            <div className="column CenterAlign TopBar">
                <button type="button" className="btn btn-primary">Home</button>
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
            <div className="TopBarContainer">
                <LeftSide></LeftSide>
                <Center></Center>
                <RightSide></RightSide>
            </div>
        </>
    )
}

export default InfoBar