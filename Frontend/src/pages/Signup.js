import React from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;

const Signup = () => {
  return (
    <SignupContainer>
      <FormWrapper>
        <h2>Sign Up</h2>
        <form>
          <Input type="text" placeholder="Enter Name" required />
          <Input type="email" placeholder="Enter Email" required />
          <Input type="password" placeholder="Enter Password" required />
          <Button type="submit">Sign Up</Button>
        </form>
      </FormWrapper>
    </SignupContainer>
  );
};

export default Signup;
