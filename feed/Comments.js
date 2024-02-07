import Comment from "./Comment";
import React from "react";

function Comments({ text, image, comments }) {
    return (
        <>
            <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>
            {image && typeof image !== 'string' ? <img src={URL.createObjectURL(image)} alt="Uploaded" className={"image"} /> : null}
            {image && typeof image === 'string' ? <img src={image} alt="Linked" className={"image"} /> : null}

            {/* Comment input field */}

            {/* Display comments */}
            <ul>
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        username={comment["username"]}
                        userImg={comment["userImg"]}
                        comment={comment["comment"]}
                    />
                ))}
            </ul>
        </>
    )
}

export default Comments;
