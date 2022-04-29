import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
export default function RandomImages() {
  const [image, setImage] = useState([]);
  const [dogName, setDogName] = useState("...");
  const [clicked, setClicked] = useState(false);
  function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => setImage(json));
  }

  useEffect(() => {
    getRandomImage();
  }, [clicked]);

  function handleClick() {
    let url = image.message;
    const arr = url.split("/");
    setDogName(arr[4]);
    setClicked(!clicked);
    // console.log(arr[4]);
  }
  return (
    <div className="header">
      <h1
        style={{
          color: "#9A8F2E",
          textDecoration: "underline",
          fontSize: "40px",
        }}
      >
        Get random doggo
      </h1>
      {
        <div>
          <img src={image.message} alt="failed" width={"40%"} />
          <h3>Random image of {dogName}</h3>
        </div>
      }
      <Button onClick={handleClick}>Click for more</Button>
    </div>
  );
}
