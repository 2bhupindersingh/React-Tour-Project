import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TourList = ({ id, image, name, info, handleDelete }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Col key={id} lg={4} md={4} sm={6} xs={12} className="mb-3">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <Button variant="link" onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show More" : "Show Less"}
              </Button>
            </Card.Text>
            <Button variant="primary" onClick={() => handleDelete(id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TourList;
