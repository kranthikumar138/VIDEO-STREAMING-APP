import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoDetail = ({ match }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:2020/api/videos/${match.params.id}`); // Updated URL
        setVideo(res.data);
      } catch (error) {
        console.error('Error fetching video details', error);   
      }
    };
    fetchVideo();
  }, [match.params.id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{video.title}</h2>
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetail;
