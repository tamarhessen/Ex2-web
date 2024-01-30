
import postsData from "./Posts.json";
import {useEffect, useState} from "react";
import {Like, Comment, Share} from "./Actions";

function Posts({postElements, setPostElements}) {

    useEffect(() => {
        // Parse the posts data
        const posts = JSON.parse(JSON.stringify(postsData));

        // Create JSX elements for each post
        const elements = Object.keys(posts).map((key) => {
            const post = posts[key];
            return (
                <div className="Post" key={key}>
                    <div className="post-username-container">
                        <div className="post-username">
                        <img src={post["user-image"]}/>
                        {post["username"]}
                        </div>
                        <div className="time">{post["time"]}</div>
                    </div>
                    <div className="post-content">
                        {post["post-text"]}
                        <br/>
                        <img className="post-image" src={post["post-image"]}/>
                    </div>
                    <div className="post-footer">
                        <span onClick={Like}>Likes: {post["likes"]} </span>
                        <span onClick={Comment}>Comments: {post["comments"]} </span>
                        <span onClick={Share}>Share</span>
                    </div>
                </div>
            );
        });

        // Set the JSX elements in the state
        console.log(elements[0]);
        setPostElements(elements);
    }, []);



    return (
        <div>
            {postElements}
        </div>
    );
}

export default Posts;