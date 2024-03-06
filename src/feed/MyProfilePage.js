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
    username: username,
    profilePicture:userImg,
    posts: [{ id: 1, text: 'This is a sample post text.' }]
  });
  console.log("posts", profileData.posts)
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
      console.log("adsada", postData)
      setProfileData({
        ...profileData,
        username: username,
        profilePicture: userImg,
        posts: postData // Assuming the response contains an array of posts
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
        {(profileData.posts) ? profileData.posts.map(post => (
          <div className="post" key={post.id}>
            <p className="post-text">{post.PostText}</p>
            <button className="button like">Like</button>
            <button className="button comment">Comment</button>
          </div>
        )) : ""}
      </div>
    </div>
  );
}

export default MyProfilePage;
