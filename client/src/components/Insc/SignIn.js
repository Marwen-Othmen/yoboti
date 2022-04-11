import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../JS/actions/authActions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.shopify.com/s/files/1/0568/1758/2237/files/logo1_320x.png?v=1621521671")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background-color: white;
  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 10px 0px;
  padding: 5px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px;
`;
const Button = styled.button`
  width: 30%;
  border: none;
  padding: 5px 10px;
  background-color: teal;
  cursor: pointer;
  color: white;
`;

const LinkB = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const SignIn = () => {

const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();
const isAuth = useSelector(state=> state.authReducer.isAuth)

useEffect(() => {
  if (localStorage.getItem('accessToken')) {
    navigate("/");
  }
},[isAuth]);

const dispatch = useDispatch();
const login = (e) => {
  e.preventDefault();

  dispatch(signIn({ email, password }));

  setEmail("");
  setPassword("");
  setUsername("")
};

  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN </Title>
        <Form>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}
                value={email} />
                 <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}
                value={username} />
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}
                value={password} />
          <Button   onClick={(e) => login(e)}> SIGN IN </Button>
          <LinkB> DO NOT YOU REMEMBER THE PASSWORD ? </LinkB>
          <LinkB>
            <Link to="/signup" > CREATE A NEW ACCOUNT </Link>
          </LinkB>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
