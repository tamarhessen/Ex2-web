import React, { useEffect, useState } from 'react';

function PostImage({ imgRef }) {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.files.length > 0) {
            const file = imgRef.current.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageData = event.target.result;
                setImageData(imageData);
            };

            reader.readAsDataURL(file);
        }
    }, [imgRef]);

    return (
            <img src={imageData} alt="Post Image" className="post-image"/>
    );
}

export default PostImage;
