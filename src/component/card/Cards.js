import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import Button from "react-bootstrap/B";
export default function Cards({ image1, image2, image3 }) {
  return (
    <div>
      <CardGroup
        style={{ margin: "50px 100px 30px 100px", borderRadius: "10px" }}
      >
        <Card style={{ padding: "30px" }}>
          <Card.Img
            variant="top"
            src={image1}
            style={{ width: "100%", height: "90%", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ padding: "30px" }}>
          <Card.Img
            variant="top"
            src={image2}
            style={{ width: "100%", height: "90%", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ padding: "30px" }}>
          <Card.Img
            variant="top"
            src={image3}
            style={{ width: "100%", height: "90%", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
