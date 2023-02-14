import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 500px;
  height: 350px;
  background-color: #FFFFFF;
  border: 2px solid #433270;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Label = styled.h1`
align-items: left;
  font-size: 24px;
  margin: 0;
  padding: 20px;
  background-color: #FFFFFF;
  
  color:#433270
`;

const Form = styled.form`

  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #433270;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
`;

const SignInForm = () => {
  return (
    <Container>
      <FormContainer>
        <Label>Sign In</Label>
        <Form>
          <Input type="text" placeholder="Enter your college email Id" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Sign In</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
