import React, { useEffect, useState } from 'react';
import { fetchVideoDetail } from '../../api/api'; // Assume this fetches video details

const VideoDetail = ({ match }) => {
  const [video, setVideo] = useState(null);
  const videoId = match.params.id;

  useEffect(() => {
    const loadVideoDetail = async () => {
      const videoData = await fetchVideoDetail(videoId);
      setVideo(videoData);
    };
    loadVideoDetail();
  }, [videoId]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <h2>{video.title}</h2>
      <video controls>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
      {/* Add comments and likes functionality */}
    </div>
  );
};

export default VideoDetail;
