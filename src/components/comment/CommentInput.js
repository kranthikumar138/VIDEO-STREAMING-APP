// CommentInput.js
import React, { useState } from 'react';

const CommentInput = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(commentText);
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={commentText} 
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Add a comment..."
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentInput;