import React, { useState } from "react";

function Comment({ id, username, userImg, comment, account, onDelete }) {
    const [editMode, setEditMode] = useState(false);
    const [editedComment, setEditedComment] = useState(comment);
    const [unEditedComment, setUnEditedComment] = useState(comment);

    const handleEditComment = () => {
        setEditMode(true);
    };

    const handleSaveEdit = () => {
        // Save the edited comment
        // You can perform any validation or sanitization here
        // For simplicity, I'm directly updating the state
        setUnEditedComment(editedComment);
        setEditMode(false);
        // Call an edit function passing the edited comment
    };
    const handleCancelEdit = () => {
        setEditedComment(unEditedComment);
        setEditMode(false);
    }

    const handleDeleteComment = () => {
        // Call the onDelete function passing the comment id
        console.log(id);
        onDelete(id);
    };

    return (
        <div>
            <img src={userImg} className="user-img" alt="User" />
            <div className="message-box">
                <div className="comment-header">
                    <span className="username">{username}</span>
                </div>
                <div style={{ whiteSpace: 'pre-wrap' }} className="comment-body">
                    {editMode ? (
                        <textarea
                            className={"input"}
                            value={editedComment}
                            onChange={(e) => setEditedComment(e.target.value)}
                        />
                    ) : (
                        <span>{editedComment}</span>
                    )}
                </div>
                {account === username && (
                    <div className="comment-actions">
                        {editMode ? (
                            <>
                            <button onClick={handleSaveEdit} className={"btn btn-primary"}>
                                Save
                            </button>
                            <button onClick={handleCancelEdit} className={"btn btn-secondary"}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={handleEditComment} className={"btn btn-warning"}>
                                    Edit
                                </button>
                                <button onClick={handleDeleteComment} className={"btn btn-danger"}>
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Comment;
