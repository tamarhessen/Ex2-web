import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddComment from "./AddComment";
import Comments from "./Comments";

function Post({ id, text, liked, comments, image, onLike, onRemove, onAddComment, onEdit, username, userImage, account }) {
    console.log("image", image);
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(text);
    const [shiftDown, setShiftDown] = useState(false);
    const [editImg, setEditImg] = useState(image);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => { setShow(true) };

    const handleEdit = () => { setEditMode(true); };

    const handleSaveEdit = () => {
        onEdit(editText, editImg);
        setEditMode(false);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditText(text);
    };

    return (
        <div className={"post-container"}>
            <div>
                <img src={userImage} className={"Logo"} alt="User logo" />
                {username}
            </div>
            <div>
                {editMode ? (
                    <>
                        <textarea
                            placeholder="What's on your mind?"
                            className={"input"}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !shiftDown) {
                                    handleSaveEdit();
                                } else if (e.key === 'Shift') {
                                    setShiftDown(true);
                                }
                            }}
                            onKeyUp={(e) => {
                                if (e.key === 'Shift') {
                                    setShiftDown(false);
                                }
                            }}
                        />
                        <input
                            id={"imageInput"}
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const image = e.target.files[0];
                                setEditImg(image);
                            }}
                        />
                        {editText && <div>{editText}</div>}
                        {editImg && typeof editImg !== 'string' ? <img src={URL.createObjectURL(editImg)} alt="Preview" className={"image"} /> : null}
                    </>
                ) : (
                    <>
                        <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>
                        {image && typeof image !== 'string' ? <img src={URL.createObjectURL(image)} alt="Uploaded" className={"image"} /> : null}
                        {image && typeof image === 'string' ? <img src={image} alt="Linked" className={"image"} /> : null}
                    </>
                )}
            </div>
            <span onClick={onLike} style={{ color: liked ? 'red' : 'black' }}>
                {liked ? '❤️' : '🤍'}
            </span>
            {account === username ? (
                <>
                    {editMode ? (
                        <>
                            <button onClick={handleSaveEdit} className={"btn btn-primary"}>Save</button>
                            <button onClick={handleCancelEdit} className={"btn btn-secondary"}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleEdit} className={"btn btn-warning"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </button>
                            <button onClick={onRemove} className={"btn btn-danger"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-x" viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708zM7.293 8l2.647-2.646a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.647 2.647a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </button>
                        </>
                    )}
                </>
            ) : null}
            {editMode ? (null) : (
                <span onClick={handleShow} className={"btn btn-primary"}>Add comment</span>
            )}
            <Modal show={show} onHide={handleClose} style={{ overflow: 'hidden'}}>
                <Modal.Header closeButton>
                    <Modal.Title>View Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modalBody"}>
                    <>
                        <Comments
                            text={text}
                            image={image}
                            comments={comments}></Comments>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <AddComment
                        username={username}
                        onAddComment={onAddComment}
                    ></AddComment>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Post;
