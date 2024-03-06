import React, { useState, useEffect } from 'react';
import './MyProfilePage.css'; // Import your profile.css file

function MyProfilePage({username,userImg}) {
  // Assuming displayName and profilePictureURL are obtained from props or context


  const [profileData, setProfileData] = useState({
    username: username,
    location: 'City, Country',
    profilePicture: userImg, // Replace with the actual path to your profile picture
    posts: [
      { id: 1, text: 'This is a sample post text.' },
      // Add more posts as needed
    ]
  });

  useEffect(() => {
    // Fetch profile data from an API if needed
    // For now, we'll use dummy data
  }, []);

  return (
    <div className="container">
      <div className="profile-header">
        <img src={profileData.profilePicture} alt="Profile Image" className="profile-image" />
        <h1>{profileData.username}</h1>
        <p>Location: {profileData.location}</p>
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
