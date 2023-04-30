// import { useMsal } from '@azure/msal-react';
import { loginRequest } from 'actions';
// import { loginRequest } from 'authConfig';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding:5%;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  height: 300px;
  background-color: #ffffff;
  border: 2px solid #433270;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    padding:5%;
    width: 70%;
    height: 200px;
  }
`;

const Label = styled.h1`
  font-size: 28px;
  margin: 0;
  padding: 30px;
  padding-top: 0;
  background-color: #ffffff;
  color: #433270;
`;

const Form = styled.div`
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
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
`;

const SignInForm = () => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (role === 'admin') {
      window.location.href = '/#/admin';
    } else {
      dispatch(loginRequest());
    }


  };

  const [role, setRole] = useState('');

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  return (
    <Container>
      <FormContainer>
        <Label>Sign In</Label>
        <Form>
          <Select name="role" value={role} onChange={handleRoleChange}>
            <Option value="student">Student</Option>
            <Option value="admin">Admin</Option>
          </Select>
          {role === 'admin' && <Input type="password" placeholder="Enter Security Code" />}

          <Button type="submit" onClick={() => handleLogin()}>
            Microsoft Sign In
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
