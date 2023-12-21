import React from "react";

function CardDetails({content, number}) {
  return (
    <div className="details">
      <p>{content}</p>
      <p>{number}</p>
    </div>
  );
}

export default CardDetails;
