import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Card, Container, CardGroup, Row, Col } from "react-bootstrap";
import { Puppy } from "../types";

interface IPuppyDetails {
  puppies: Puppy[];
  deletePuppy: (id: number) => void;
  message: string;
  flag: boolean;
}

const PuppyDetails = ({
  puppies,
  deletePuppy,
  message,
  flag,
}: IPuppyDetails) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const puppy = puppies.find((puppy: Puppy) => puppy.id === Number(id));

  const handleDelete = (id: any) => {
    deletePuppy(id);
    navigate("/puppiesList");
  };
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
    },
    cardImage: {
      objectFit: "cover",
      borderRadius: 55,
    },
  };

  return (
    <>
      {message}
      <Container fluid>
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={puppy?.picture}
                  height="400px"
                  width="200px"
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
                    <h3>Name: &nbsp;</h3>
                    <span className="fs-2">{puppy?.pet_name}</span>
                  </Card.Title>
                  <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
                    <h3>Breed: &nbsp;</h3>
                    <span className="fs-2">{puppy?.breed_name}</span>
                  </Card.Title>
                  <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
                    <h3>Age: &nbsp;</h3>
                    <span className="fs-2">{puppy?.age}</span>
                  </Card.Title>
                  <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
                    <h3>Gender: &nbsp;</h3>
                    <span className="fs-2">{puppy?.gender}</span>
                  </Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </CardGroup>
      </Container>

      {flag ? (
        <Button
          onClick={() => handleDelete(puppy?.id)}
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default PuppyDetails;
