import React, { useState, useEffect, useRef } from 'react';
import './MyProfilePage.css';
import { useLocation } from 'react-router-dom';
import PostList from './Posts';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LeftSide from "./MainLeft"
import MainFeedCenter from "./MainFeedCenter";
import RightSide from "./MainRight";

function MyProfilePage() {
  const [mode, setMode] = useState(true);
  const location = useLocation();
  const { state } = location;
  const { username, userImg, token } = state;
  const [pic, setPic] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [realPic, setRealPic] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditWindow, setShowEditWindow] = useState(false);
  const [editedDisplayName, setEditedDisplayName] = useState('');
  const [image, setImage] = useState(undefined);

  const modalRef = useRef(null);

  const handleEditProfilePicture = async (image) => {
    let imageData = '';

    // Check if image is provided
   
      // Read the image file using FileReader
      const reader = new FileReader();

      reader.onloadend = () => {
        // Store the base64 string in the imageData variable
        imageData = reader.result;

        // Call the function to update the profile picture
        updateProfilePicture(imageData);
      };

      // Convert the image file to base64
      reader.readAsDataURL(image);
    
  };

  // Function to fetch user data from the server
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('User Data:', userData); // Log the userData object

        setDisplayName(userData.displayName); // Set the displayName separately
        setPassword(userData.password);
       setImage(userData.profilePic);

        console.log("sssss" + displayName);

      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const updateProfilePicture = async (imageData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          profilePic: imageData,
        }),
      });

      if (response.ok) {
        // Update the profile picture in the state
        setShowModal(false); // Close the modal after successful update
      } else {
        // Handle error if updating profile picture fails
        console.error('Failed to update profile picture');
      }
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Update the state to close the modal
  };

  // Handle profile picture selection
  function showPic(event) {
    const file = event.target.files[0];
    setRealPic(file);
    if (file) {
      // Convert the selected image to a base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setPic(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPic('');
    }
  }

  const handleOpenEditWindow = () => {
    setShowEditWindow(true);
    setEditedDisplayName(displayName);
  };

  const handleCloseEditWindow = () => {
    setShowEditWindow(false);
  };

  const handleDisplayNameChange = (event) => {
    setEditedDisplayName(event.target.value);
  };

  const handleSaveDisplayName = async() => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          displayName: editedDisplayName,
        }),
      });

      if (response.ok) {
        // Update the display name in the state
        setDisplayName(editedDisplayName);
        setShowEditWindow(false);
      } else {
        console.error('Failed to update display name');
      }
    } catch (error) {
      console.error('Error updating display name:', error);
    }
  };

  return (
    <div className="container">
      <div className="profile-details">
        <div className="profile-header">
          <img
            src={image}
            alt="Profile Image"
            className={"Logo profile-image"}
            onClick={() => setShowModal(true)}
            style={{ width: "100%", height: "20%" }}
          />
          {showEditWindow ? (
            <div>
              <input
                type="text"
                value={editedDisplayName}
                onChange={handleDisplayNameChange}
              />
              <button onClick={handleSaveDisplayName}>Save</button>
              <button onClick={handleCloseEditWindow}>Cancel</button>
            </div>
          ) : (
            <div>
              <h1>{displayName}</h1>
              <button onClick={handleOpenEditWindow}>Edit Display name</button>
            </div>
          )}
        </div>
      </div>
  
      <div className="posts-container">
        <div className="posts">
          <PostList
          displayName={displayName}
            username={username}
            userImg={userImg}
            mode={mode}
            token={token}
          />
        </div>
      </div>
  
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Picture</Form.Label>
            <Form.Control
              className="form-control"
              type="file"
              id="formFile"
              onChange={showPic}
              name="image"
              accept="image/*"
            />
          </Form.Group>
          <div className="img-cont">
            <img src={pic} id="Profile-Picture" alt="Profile Picture" />
          </div>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleEditProfilePicture(realPic)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
          }
export default MyProfilePage;
