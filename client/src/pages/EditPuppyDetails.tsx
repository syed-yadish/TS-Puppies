import React, { useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import { Puppy } from '../types';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {AiFillEdit} from 'react-icons/ai'

interface IEditPuppy {
    puppies:Puppy[];
    editNewPuppy : (editPuppy : Puppy) => void;
    message: string;
  }

const EditPuppyDetails = ({editNewPuppy,puppies,message}:IEditPuppy) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const initialPuppy : Puppy | undefined = puppies.find(puppy => puppy.id === Number(id));

    const [editPuppy, SetEditPuppy] = useState<Puppy>({
        id:initialPuppy?.id,
        age:initialPuppy?.age,
        pet_name:initialPuppy?.pet_name,
        breed_name: initialPuppy?.breed_name,
        picture : initialPuppy?.picture,
        gender: initialPuppy?.gender

    });

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) =>{
        const {value,name} = e.target;
        SetEditPuppy({...editPuppy,[name]:value})  
    }

    const editPuppyDetails = (editPuppy : Puppy) =>{
        editNewPuppy(editPuppy);
        navigate(`/puppy/${editPuppy.id}`)
    }
  return (
    <>
    {/* <div>
        <div className='addpuppy-container'>

        <div className="edit-text">Edit Puppy Information</div>

        <h5>{message}</h5>

        <form className="form-container" onSubmit={() =>editPuppyDetails(editPuppy)}>
          
            <label className="form-label">Name: </label>
            <input className="form-input" type="text" name="pet_name" value={editPuppy.pet_name} onChange={handleChange} />

            <label className="form-label">Breed: </label>
            <input className="form-input" type="text" name='breed_name' value={editPuppy.breed_name} onChange={handleChange} />

            <label className="form-label">Gender: </label>
            <input  className="form-input" type="text" name="gender" value={editPuppy.gender} onChange={handleChange} />

            <label className="form-label">Age: </label>
            <input  className="form-input" type="number" name='age' value={editPuppy.age} onChange={handleChange} />

            <label className="form-label">Icon </label>
            <input  className="form-input" type="text" name='icon' value={editPuppy.picture} onChange={handleChange} />

            <button className='edit-btn'>Edit <AiFillEdit className='home-icon'/></button>  


        </form>       
    </div>
    </div> */}

    <div className="d-flex align-items-center flex-column">
      <h1>Edit Puppy Details</h1>

      <Form onSubmit={() => editPuppyDetails(editPuppy)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name of puppy"
            name="pet_name"
            value={editPuppy.pet_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture_url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url of picture"
            name="picture"
            value={editPuppy.picture}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy breed"
            name="breed_name"
            value={editPuppy.breed_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy gender"
            name="gender"
            value={editPuppy.gender}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter puppy age"
            name="age"
            value={editPuppy.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Edit Puppy</Button>
      </Form>
    </div>

    </>
  )
}

export default EditPuppyDetails