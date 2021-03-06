import React, { useEffect, useState } from "react";
import Cards from "./card/Cards";
import Button from "react-bootstrap/Button";
export default function Grid() {
  const [url, setUrl] = useState([]);
  const [click, setClick] = useState(false);
  const [names, setNames] = useState([]);
  function fetchData() {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((json) => {
        setUrl(json.message);
        let res = url.map((u) => u);
        let n = [];
        for (let i = 0; i < res.length; i++) {
          let arr = res[i].split("/");
          // console.log(arr[4]);
          n.push(arr[4]);
        }
        // console.log(n);
        setNames(n);
      });
  }
  console.log(names);
  function handleClick() {
    setClick(!click);
  }
  useEffect(() => {
    fetchData();
  }, [click]);

  // console.log(url);
  return (
    <div className="header">
      <h1
        style={{
          color: "#359A90",
          textDecoration: "underline",
          fontSize: "40px",
        }}
      >
        Create a grid image
      </h1>
      <Cards
        image1={url[0]}
        image2={url[1]}
        image3={url[2]}
        name1={names[0]}
        name2={names[1]}
        name3={names[2]}
      />
      <Button
        onClick={handleClick}
        style={{ marginBottom: "50px" }}
        variant="primary"
      >
        Load More
      </Button>
    </div>
  );
}
