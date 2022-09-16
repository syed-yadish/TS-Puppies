import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Puppy } from "../types";

interface IPuppyList {
  puppies: Puppy[];
}

const PuppiesList = ({ puppies }: IPuppyList) => {
  return (
    <div className="ms-auto fw-bold fs-5">
      <h1>Puppies List</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {puppies.map((puppy) => (
          <Col key={puppy.id}>
            <Link to={`/puppy/${puppy.id}`}>
              <h2>{puppy.pet_name}</h2>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PuppiesList;
