import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);

    try {
      await axios.post('http://localhost:2020/api/videos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Video uploaded successfully');
      // Reset the form after successful upload
      setVideoFile(null);
      setTitle('');
      setDescription('');
      setTags('');
    } catch (error) {
      console.error('Error uploading video', error);
      alert('Error uploading video. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input 
          type="file" 
          accept="video/mp4" 
          onChange={(e) => setVideoFile(e.target.files[0])} 
          required 
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
