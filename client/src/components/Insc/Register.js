import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {signUp} from "../../JS/actions/authActions";
import styled from "styled-components";
import { mobile } from "../Responsive";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://bestlifeonline.com/wp-content/uploads/sites/3/2020/02/My-Post-4.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: Wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 30px 5px 0px 5px;
  padding: 5px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
`;

const Register = () => {

  

    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [adress, setAdress] = useState("");

    const register = (e) => {
      e.preventDefault();
  
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        adress,
        username, 
      };
  
      dispatch(signUp(newUser));
  
      setEmail("");
      setFirstName("");
      setlastName("");
      setAdress("");
      setPassword("");
      setPhoneNumber("");
      setUsername ("");
    };
  


  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT </Title>
        <Form>
          <Input placeholder="firstname" onChange={(e) => setFirstName(e.target.value)}
                  value={firstName} />
          <Input placeholder="lastname"onChange={(e) => setlastName(e.target.value)}
                  value={lastName} />
                  <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}
                  value={username}/> 
          <Input placeholder="adress" onChange={(e) => setAdress(e.target.value)}
                  value={adress}/>
          <Input placeholder="phonenumber" onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}/> 
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}
                  value={email}/> 
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}
                  value={password}/> 
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <Agreement>
            By creating an account , I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY </b>{" "}
          </Agreement>
          <Button onClick={(e) => register(e)} > CREATE  </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
