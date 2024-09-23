import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../../api/api'; // Assume this fetches video data

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos();
      setVideos(videoData);
    };
    loadVideos();
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      {videos.map(video => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <a href={`/video/${video._id}`}>Watch</a>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
