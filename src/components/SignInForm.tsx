import { useMsal } from '@azure/msal-react';
import { loginRequest } from 'authConfig';
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
  width: 60%;
  height: 300px;
  background-color: #FFFFFF;
  border: 2px solid #433270;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Label = styled.h1`

  font-size: 28px;
  margin: 0;
  padding: 30px;
  padding-top: 0;
  background-color: #FFFFFF;
  color:#433270
`;

const Form = styled.form`

  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Select = styled.select`
width: 100%;
height: 40px;
margin-bottom: 20px;
padding: 10px;
font-size: 16px;
border-radius: 6px;
border: 2px solid #433270;
`;

const Option = styled.option`
  padding: 10px;
`;


// const Input = styled.input`
//   width: 100%;
//   height: 40px;
//   margin-bottom: 20px;
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 6px;
// `;

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

  const { instance } = useMsal();

  const handleLogin =(loginType: string) => {
    if (loginType === "popup") {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    } else if (loginType === "redirect") {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
    }
}



  return (
    <Container>
      <FormContainer>
        <Label>Sign In</Label>
        <Form>
        <Select name="role">
        <Option value="admin">Admin</Option>
        <Option value="student">Student</Option>
      </Select>
          {/* <Input type="text" placeholder="Enter your college email Id" />
          <Input type="password" placeholder="Password" /> */}
          <Button type="submit" onClick={() => handleLogin("redirect")}>Sign In</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
