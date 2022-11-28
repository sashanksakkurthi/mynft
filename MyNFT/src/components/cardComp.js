import React from "react";
import Card from "react-bootstrap/Card";

const CardComp = ({ coin }) => {
  return (
    <div className="col-3 p-2">
      <Card>
        <Card.Img variant="top" src={coin[0]} />
        <Card.Body>
          <Card.Title>{coin.title}</Card.Title>
          <Card.Text>{coin.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComp;
