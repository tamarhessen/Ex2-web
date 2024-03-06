import React, { useState, useEffect } from 'react';
import './MyProfilePage.css'; // Import your profile.css file
import { useLocation } from 'react-router-dom';

function MyProfilePage() {
  // Assuming displayName and profilePictureURL are obtained from props or context
  const [mode, setMode] = useState(true);
  const location = useLocation();
  const { state } = location;
  const {username,userImg,token } = state;
console.log(username);
console.log(userImg);
console.log(token);

  const [profileData, setProfileData] = useState({
    username: "aaa",
    profilePicture:userImg, 
    // Replace with the actual path to your profile picture
   
    posts: [
      { id: 1, text: 'This is a sample post text.' },
      // Add more posts as needed
    ]
  });
  
  useEffect(() => {
  const fetchUserPosts = async () => {
    try {
      // Make API request to fetch user posts using the user's ID or username
      const response = await fetch(`http://localhost:5000/api/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user posts');
      }

      const postData = await response.json();
      setProfileData({
        ...profileData,
        username: username,
        profilePicture: userImg,
        posts: postData.posts // Assuming the response contains an array of posts
      });
    } catch (error) {
      console.error('Error fetching user posts:', error);
      // Handle error
    }
  };

  fetchUserPosts();
}, [username, userImg, token]); // Fetch posts whenever username, userImg, or token changes


  return (
    <div className="container">
      <div className="profile-header">
        <img src={profileData.profilePicture} alt="Profile Image" className="profile-image" />
        <h1>{profileData.username}</h1>
      </div>

      <div className="posts">
        {profileData.posts.map(post => (
          <div className="post" key={post.id}>
            <p className="post-text">{post.text}</p>
            <button className="button like">Like</button>
            <button className="button comment">Comment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProfilePage;
