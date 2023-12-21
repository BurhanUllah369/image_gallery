import React, { useEffect, useState } from "react";
import Card from "./Card";

function Main({ value }) {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${value}&image_type=photo&pretty=true`;
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        setItems(item.hits);
        setLoad(true);
        setTimeout(() => {
          setLoad(false);
        }, 3000);
      });
  }, [value]);

  return (
    <div className="wrapper">
      {load ? (
        <div
          className="loader"
          style={load ? { display: "block" } : { display: "none" }}
        ></div>
      ) : items.length === 0 ? (
        <h1 className="error">No images found</h1>
      ) : (
        items.map((item) => (
          <Card
            key={item.id}
            image={item.largeImageURL}
            name={item.user}
            views={item.views}
            downloads={item.downloads}
            likes={item.likes}
            tags={item.tags}
          />
        ))
      )}
    </div>
  );
}

export default Main;
