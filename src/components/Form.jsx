import React, { useState } from "react";

function Form({sendToMain}) {
  const [value, setValue] = useState("flowers");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToMain(value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='Search Image'/>
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default Form;
