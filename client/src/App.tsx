import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Container } from "react-bootstrap";
import PuppiesList from "./pages/PuppiesList";
import { AddPuppy, Puppy } from "./types";
import { Route, Routes } from "react-router-dom";
import PuppyDetails from "./pages/PuppyDetails";
import EditPuppyDetails from './pages/EditPuppyDetails';
import Home from "./pages/Home";
import AddNewPuppy from "./pages/AddNewPuppy";

function App() {
  const [puppies, setPuppies] = useState<Puppy[]>([]);
  const [successMessage, SetSuccessMessage] = useState("");
  const [flag, setFlag] = useState(true);

  const GetPuppiesInfo = async () => {
    const response = await fetch("http://localhost:3020/api/puppies");
    const data = await response.json();
    setPuppies(data);
  };

  const deletePuppy = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://localhost:3020/api/puppies/${id}`,
      options
    );
    if (response.ok) {
      SetSuccessMessage("puppy is deleted");
      setFlag(false);
      // GetPuppiesInfo();
      setPuppies((prev) => {
        const data = prev.filter((puppy) => puppy.id !== id);
        return data;
      });
    }
  };

  const addPuppy = async (puppy: AddPuppy) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(puppy),
    };
    const response = await fetch(`http://localhost:3020/api/puppies/`, options);
    if (response.ok) {
      SetSuccessMessage("New Puppy is added");
      // setFlag(false);
      GetPuppiesInfo();

      setTimeout(() => {
        SetSuccessMessage("");
      }, 3000);
    }
  };

  const editPuppy = async (editedPuppy: Puppy) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(editedPuppy),
    };
    const response = await fetch(
      `http://localhost:3020/api/puppies/${editedPuppy.id}`,
      options
    );
    SetSuccessMessage("");

    if (response.ok) {
      SetSuccessMessage("New Puppy is edited");

      setPuppies((prev: any) => {
        const filtered: Puppy[] = prev.filter(
          (p: Puppy) => p.id !== editedPuppy.id
        );

        return [...filtered, editedPuppy as Puppy];
      });

      setTimeout(() => {
        SetSuccessMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    GetPuppiesInfo();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home puppies={puppies} />}>
            {" "}
          </Route>
          <Route
            path="/puppiesList"
            element={<PuppiesList puppies={puppies} />}
          >
            {" "}
          </Route>
          <Route
            path="/addpuppy"
            element={
              <AddNewPuppy addPuppy={addPuppy} message={successMessage} />
            }
          >
            {" "}
          </Route>
          <Route
            path="/editpuppy/:id"
            element={
              <EditPuppyDetails
                editNewPuppy={editPuppy}
                puppies={puppies}
                message={successMessage}
              />
            }
          >
            {" "}
          </Route>
          <Route
            path="/puppy/:id"
            element={
              <PuppyDetails
                deletePuppy={deletePuppy}
                puppies={puppies}
                message={successMessage}
                flag={flag}
              />
            }
          >
            {" "}
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
