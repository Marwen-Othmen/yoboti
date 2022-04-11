import React from "react";
import styled from "styled-components";
import { popularProducts } from '../Catetegorie/data';
import Bestproduct from "./Bestproduct";

const Container = styled.div`
padding :20px;
display : flex;
flex-wrap:wrap;
justify-content: space-between;
`;

const Bestproducts = () => {
  return (
    <Container>
      {popularProducts.map((el) => (
        <Bestproduct BestProd={el} key={el.id} />
      ))}
      
    </Container>
  );
}; 
export default Bestproducts;