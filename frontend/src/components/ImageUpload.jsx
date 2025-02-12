import React, { useState, useRef } from 'react';
import DefaultImage from "/assets/upload-photo-here.png";
import UploadingAnimation from "/assets/uploading.gif";

const ImageUpload = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      const formData = new FormData();

      formData.append("file", uploadedFile);

      const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
        method: "POST",
        body: formData,
      });

      if (response.status === 201) {
        const data = await response.json();
        setAvatarURL(data?.location);
      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      {/* Bigger Image Box */}
      <div className="h-56 w-56 border-2 border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
        <img src={avatarURL} alt="Avatar" className="h-full w-full object-cover" />
      </div>

      <form id="form" encType="multipart/form-data" className="flex flex-col items-center">
        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden />

        {/* Upload Button */}
        <button
          type="button"
          onClick={handleImageUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
