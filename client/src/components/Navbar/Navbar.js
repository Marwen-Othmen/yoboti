import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartOutlined} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
${mobile({ height:"50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding:"10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 3px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display:"none" })};
`;

const Center = styled.div`
  flex: 1;
  text-align : center;
`;
const Logo = styled.h1`
  font-weight: blod;
  ${mobile({ fontSize:"24px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end ;
  ${mobile({ flex:2, justifyContent:"center" })};
`;
const Input = styled.input`
  border: none;
  ${mobile({ width:"50px" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
  ${mobile({ fontSize:"12px" , marginLeft:"10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center> <Logo> YoBoTi </Logo></Center>
        <Right>
          <Link to='signup'>
          <MenuItem> REGISTER </MenuItem>
          </Link>
          <Link to='signin'>
          <MenuItem> SIGN IN </MenuItem>
          </Link>
          <MenuItem>
          <Badge  badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
