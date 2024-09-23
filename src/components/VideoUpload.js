import React, { useState } from 'react';
import { uploadVideo } from '../../api/api';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) return;

    const videoData = {
      videoFile,
      title,
      description,
    };

    await uploadVideo(videoData);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Video</h2>
      <input 
        type="file" 
        accept="video/mp4" 
        onChange={(e) => setVideoFile(e.target.files[0])} 
        required 
      />
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUpload;
