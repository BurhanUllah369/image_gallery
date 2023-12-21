import React from "react";
import CardDetails from "./CardDetails";

function Card({image, name, views, downloads, likes, tags}) {
  const tagItems = tags.split(',')
  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <div className="content">
        <h1 className="name">Photo by {name}</h1>
        <CardDetails content="Views:" number={views} />
        <CardDetails content="Downloads:" number={downloads} />
        <CardDetails content="Likes:" number={likes} />
        <div className="tags">
          {tagItems.map((tag, index) => 
            <span key={index}>#{tag}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
