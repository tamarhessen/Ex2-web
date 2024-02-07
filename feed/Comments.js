import Comment from "./Comment";
import React, {useState} from "react";

function Comments({ text, image, oldComments, account }) {
    const [comments, setComments] = useState(oldComments);
    const onDelete = (id) => {
        console.log(oldComments);
        if (id > -1) {
            const updatedComments = [...comments];
            updatedComments.splice(id, 1);
            oldComments.splice(id,1);
            setComments(updatedComments);
        }
        console.log(comments)
    };


    return (
        <>
            <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>
            {image && typeof image !== 'string' ? <img src={URL.createObjectURL(image)} alt="Uploaded" className={"image"} /> : null}
            {image && typeof image === 'string' ? <img src={image} alt="Linked" className={"image"} /> : null}



            <ul>
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        id={index}
                        username={comment["username"]}
                        userImg={comment["userImg"]}
                        comment={comment["comment"]}
                        account={account}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </>
    )
}

export default Comments;
