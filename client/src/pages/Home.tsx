import React from "react";
import { Link } from "react-router-dom";
import { Puppy } from "../types";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/p5.jpeg";
import pic2 from "../assets/p6.jpeg";
import pic3 from "../assets/p1.jpeg";

// import PuppiesList from "./PuppiesList";

interface IHome {
  puppies: Puppy[];
}

const Home = ({ puppies }: IHome) => {
  return (
    <div>
      <h1>Puppies Home</h1>
      <div className="home-btns">
        <Link to={"/addpuppy"} className="btn btn-primary btn-lg active">
          Add a Puppy
        </Link>
        <br />
        <Link to={"/puppiesList"} className="btn btn-secondary btn-lg active">
          Puppies List
        </Link>
      </div>
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            width={900}
            height={600}
            className="d-block w-80"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={pic2}
            alt="Second slide"
            width={900}
            height={600}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={pic3}
            alt="Third slide"
            width={900}
            height={600}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
