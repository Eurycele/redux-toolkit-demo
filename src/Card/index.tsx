import React from "react";
import Post from "../Models/Post";

import "./card.css";

export type ICardProps = {
  post: Post;
};

const Card = ({ post }: ICardProps) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-id">
          <span>{post.id} </span>
        </div>

        <div className="card-title">
          <h3>{post.title}</h3>
        </div>
      </div>

      <div className="card-body">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Card;
