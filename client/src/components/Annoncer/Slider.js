import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
 
  ${mobile({ fontSize:"24px" })};
`;

const Slider = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.e-dealshop.com/files/135645/img/19/maquette-edealshop-slider-hightech.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.e-dealshop.com/files/135645/img/25/maquette-edealshop-slider-jardin.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.e-dealshop.com/files/135645/img/24/maquette-edealshop-slider-cuisine.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
