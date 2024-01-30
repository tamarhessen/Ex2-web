import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useRef, useState} from "react";
import {Like, Comment, Share} from "./Actions";
import PostImage from "./PostImage.js";
let key = 0;

function UploadPost({username, postElements, setPostElements}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [invalid, setInvalid] = useState(false);
    const postRef = useRef("");
    const imgRef = useRef("");
    const d = new Date();
    function AddPost() {
        let month = d.getMonth() + 1;
        let postText = postRef.current.value;

        let newPost =
            (
                <div className="Post" key={key}>
                    <div className="post-username-container">
                        <div className="post-username">
                        <img src={"abc"}/>
                        {username}
                        </div>
                        <div className="time">{d.getDate()}-{month}-{d.getFullYear()}</div>
                    </div>
                    <div className="post-content">
                        {postText}
                        <br/>
                        <PostImage imgRef={imgRef}></PostImage>
                    </div>
                    <div className="post-footer">
                        <span onClick={Like}>Likes: 0 </span>
                        <span onClick={Comment}>Comments: 0 </span>
                        <span onClick={Share}>Share</span>
                    </div>
                </div>
            );
        key++;
        setPostElements([...postElements, newPost])
        setShow(false);
    }
    function keydownAddPost(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            AddPost();
        }
    }
    function previewImage() {
        var preview = document.getElementById('imagePreview');
        var fileInput = document.getElementById('imageInput').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
            preview.style.display = 'block';
        }

        if (fileInput) {
            reader.readAsDataURL(fileInput);
        } else {
            preview.src = '';
            preview.style.display = null;
        }
    }



    let placeholder = "whats on your mind, " + username + "?";
    return (<>
        <div>
            <span className="img">img</span> <span>{username}</span>
        <div onClick={handleShow}>
            What's on your mind, {username}?
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="recipient-name" className="col-form-label">{username}</Form.Label>
                        <Form.Group className="input-group">
                            <Form.Control type="text" className="form-control" id="recipient-name" ref={postRef}
                                          isInvalid = {invalid} onKeyDown={keydownAddPost} placeholder={placeholder} />
                        </Form.Group>
                        <Form.Group className="input-group">
                            <form id="imageForm" encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="imageInput" className="form-label">Choose an image:</label>
                                    <input type="file" className="form-control" id="imageInput" name="image"
                                           onChange={previewImage} ref={imgRef}/>
                                </div>
                                <div id="imagePreviewContainer" className="mb-3">
                                    <img id="imagePreview" src="#" alt="Image Preview"/>
                                </div>
                            </form>
                        </Form.Group>
                    </Form.Group>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={AddPost}>
                    Add post
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    </>);


}

export default UploadPost