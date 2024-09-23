// src/api.js

const API_BASE_URL = 'http://localhost:2000'; // Change this to your backend URL

// User Authentication
export const registerUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
};

// Video Upload
export const uploadVideo = async (videoData, token) => {
    const response = await fetch(`${API_BASE_URL}/api/videos/upload`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
        body: videoData,
    });
    return response.json();
};

// Fetch Videos
export const fetchVideos = async () => {
    const response = await fetch(`${API_BASE_URL}/api/videos`, {
        method: 'GET',
    });
    return response.json();
};

// Comments
export const addComment = async (videoId, commentData, token) => {
    const response = await fetch(`${API_BASE_URL}/api/videos/${videoId}/comments`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });
    return response.json();
};

// Likes/Dislikes
export const likeVideo = async (videoId, token) => {
    const response = await fetch(`${API_BASE_URL}/api/videos/${videoId}/like`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};
