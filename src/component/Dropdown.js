import React from "react";
import Button from "react-bootstrap/Button";
export default function DropdownMenu() {
  const [dogs, setDogs] = React.useState([]);
  const [dogList, setDogList] = React.useState([]);
  const [dogName, setDogName] = React.useState("affenpinscher");
  const [dogUrl, setDogUrl] = React.useState([]);
  const [seeMore, setSeeMore] = React.useState(false);
  function fetchData() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        return response.json();
      })
      .then((json) => setDogs(json.message));
  }

  function fetchDogWise() {
    fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setDogUrl(json.message);
      });
  }

  React.useEffect(() => {
    fetchData();
    fetchDogWise();
  }, [dogName, seeMore]);

  function getMore() {
    setSeeMore(!seeMore);
  }

  console.log(dogUrl);
  return (
    <div className="header">
      <h1
        style={{
          color: "#B63667",
          textDecoration: "underline",
          fontSize: "40px",
        }}
      >
        Select from dropdown{" "}
      </h1>
      <div>
        <select
          name="dogs"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        >
          {Object.keys(dogs).map((dog) => (
            <option>{dog}</option>
          ))}
        </select>
        <br></br>
        <br></br>
        <img src={dogUrl} alt={dogName} width={"40%"} />
      </div>
      <h3>Image of {dogName}</h3>
      <br></br>
      <Button onClick={getMore}>More from this breed please!</Button>
    </div>
  );
}
