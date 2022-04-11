import React, { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../Annoncer/Announcement";
import Bestproducts from "./Bestproducts";
import Footer from "../Footer/Footer";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../JS/actions/productsActions";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "Column" })};
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;
const Option = styled.option``;

const ProductList = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return loading ? (
    <h1>Please wait ... </h1>
  ) : (
    <Container>
      <Announcement />
      <Title> Produit List </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produit </FilterText>
          <Select>
            <Option Type> Type de Produit </Option>
            <Option> Option 1</Option>
            <Option> Option 2</Option>
            <Option> Option 3</Option>
            <Option> Option 4</Option>
            <Option> Option 5</Option>
          </Select>
          <Select>
            <Option Type> Model </Option>
            <Option> Option 1</Option>
            <Option> Option 2</Option>
            <Option> Option 3</Option>
            <Option> Option 4</Option>
            <Option> Option 5</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Filter Prix </FilterText>
          <Select>
            <Option selection> Newest </Option>
            <Option> Prix (asc)</Option>
            <Option> Prix (Desc) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductForm className="products" edit={false} />

      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
      <Bestproducts />

      <Footer />
    </Container>
  );
};

export default ProductList;
