import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AddPuppy } from "../types";

interface IAddPuppy {
  addPuppy: (newPuppy: AddPuppy) => void;
  message: string;
}

const AddNewPuppy = ({ addPuppy, message }: IAddPuppy) => {
  const navigate = useNavigate();
  const [newPuppy, SetNewPuppy] = useState<AddPuppy>({
    breed_name: "",
    pet_name: "",
    gender: "",
    age: 0,
    picture: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    SetNewPuppy({ ...newPuppy, [name]: value });
  };

  const addNewPuppy = (newPuppy: AddPuppy) => {
    addPuppy(newPuppy);
    navigate("/puppiesList");
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <h1>Add Puppy</h1>

      <Form onSubmit={() => addNewPuppy(newPuppy)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name of puppy"
            name="pet_name"
            value={newPuppy.pet_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture_url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url of picture"
            name="picture"
            value={newPuppy.picture}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy breed"
            name="breed_name"
            value={newPuppy.breed_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy gender"
            name="gender"
            value={newPuppy.gender}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy age"
            name="age"
            value={newPuppy.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Add Puppy</Button>
      </Form>
    </div>
  );
};

export default AddNewPuppy;
