import React from "react";

function Comment({ username, userImg, comment }) {
    return (
        <>
            <div>
                <img src={userImg} className="user-img" alt="User" />
                <div className="message-box">
                    <div className="comment-header">
                        {/*<img src={userImg} className="user-img" alt="User" />*/}
                        <span className="username">{username}</span>
                    </div>
                    <div style={{ whiteSpace: 'pre-wrap' }} className="comment-body">
                        {comment}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;