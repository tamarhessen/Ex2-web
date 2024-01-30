import UploadPost from "./UploadPost";
import Posts from "./Posts.js";
import {useState} from "react";
function MainFeedCenter({username}) {
    const [postElements, setPostElements] = useState([]);

    return (<>
        <div className="column MainColumn">
        <UploadPost username={username} postElements={postElements} setPostElements={setPostElements}></UploadPost>
        <br/>
        <Posts postElements={postElements} setPostElements={setPostElements}></Posts>
        </div>
    </>);
}

export default MainFeedCenter