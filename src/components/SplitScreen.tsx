import React from 'react';
import styled from 'styled-components'
import SignInForm from './SignInForm';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  padding: 3%;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 768px) {
    width: 70%;
    height: auto;
  }
`;

const Heading = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-weight:600;
  font-size: 45px;
  color: #C73E27;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Right = styled.div`
  width: 100%;
  background-color: #FFFFFF;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const VerticalLine = styled.div`
  position: absolute;  
  bottom: 20%;
  left: 50%;
  width: 2px;
  height:60%;
  background-color: #c73e27;
  display:block;
  @media (max-width: 768px) {
    display: none;
  }


`;

const SplitScreen = () => {
  return (
    <Container>
      <Left>
      <Image src="https://github.com/shaikhafzaal2/data/blob/main/university-main-logo_96575fd44b35071619e2d5f4abc0b108%20(1).png?raw=true" alt="Image" />
        <Heading>Welcome to </Heading>
        <Heading>PLACEMENT PORTAL</Heading>
      </Left>
      <Right>
        <SignInForm />
      </Right>
      <VerticalLine />
    </Container>
  );
};

export default SplitScreen;
