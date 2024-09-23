import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:2020/api/videos'); // Updated URL
        setVideos(res.data);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Video Streaming App</h2>
      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="video-list">
        {filteredVideos.map(video => (
          <div key={video._id} className="video-item">
            <Link to={`/videos/${video._id}`}>
              <img src={video.thumbnail} alt={video.title} />
              <h4>{video.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

