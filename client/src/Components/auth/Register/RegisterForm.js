// Dependencies
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  min-width: 40rem;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
`;
const RegisterTitle = styled.h1`
  font-size: 3rem;
  color: white;
`;
const GroupContainer = styled.div`
  margin: 1.2rem 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.7);
  outline: none;
  padding: 0.5rem;
`;
const Form = styled.form``;
const Label = styled.label`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
`;
const SubmitButton = styled.button`
  width: 70%;
  font-size: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  font-weight: 600;
  background: rgba(26, 38, 57, 1);
  outline: none;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 2rem;
`;

const LoginButton = styled.button`
  margin-top: 0.5rem;
  width: 50%;
  font-size: 2rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.3rem;
  cursor: pointer;
  outline: none;
`;

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  return (
    <FormContainer>
      <RegisterTitle>Register</RegisterTitle>
      <Form>
        <GroupContainer>
          <Label htmlFor="email">Name</Label>
          <Input />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="email">Email Adress</Label>
          <Input />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="password">Password</Label>
          <Input />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="password2">Confirm Password</Label>
          <Input />
        </GroupContainer>
        <SubmitButton>Submit</SubmitButton>
      </Form>
      <LoginContainer>
        <span>Do you have account ? Please sign in here</span>
        <LoginButton>Log in</LoginButton>
      </LoginContainer>
    </FormContainer>
  );
};

export default RegisterForm;