// import UploadPost from "./UploadPost";
// import {Posts} from "./Posts.js";
import PostList from "./Posts";
import {useState} from "react";
function MainFeedCenter({username, userImg}) {
    const [postElements, setPostElements] = useState([]);
    console.log(username)
    return (<>
        <div className="column MainColumn">
        {/*<UploadPost username={username}></UploadPost>*/}
        <br/>
            {/*<Posts username={username}></Posts>*/}
            <PostList username={username} userImg={userImg}></PostList>
        </div>
    </>);
}

export default MainFeedCenter