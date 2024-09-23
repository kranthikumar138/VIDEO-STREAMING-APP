// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;


