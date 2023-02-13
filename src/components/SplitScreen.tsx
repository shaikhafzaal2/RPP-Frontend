import React from 'react';
import styled from 'styled-components'
import MsrLogo from '../assets/MsrLogoW.png'
import SignInForm from './SignInForm';


const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`

  width: 480px;
  height: 200px;
  margin-bottom: 40px;
  
`;

const Heading = styled.span`
 
  font-family: 'Noto Sans', sans-serif;
  font-weight:600;
  font-size: 40px;
  color: #C73E27;
  text-align: center;
  padding: 0 -20px
 
`;
const Heading1 = styled.span`
  font-size: 40px;
  color: #C73E27;
  font-weight:600;
`;

const Right = styled.div`
  width: 50%;
  background-color: #FFFFFF;
`;
const VerticalLine = styled.div`
  position: absolute;
  top: 150px;
  bottom: 199px;
  left: 50%;
  width: 2px;
  height:408px;
  background-color: #c73e27;
`;

const SplitScreen = () => {
  return (
    <Container>
      <Left>
      <Image src={MsrLogo} alt="Image" />
        <Heading>Welcome to </Heading>
        <Heading1>PLACEMENT PORTAL</Heading1>
      </Left>
      <Right>
        <SignInForm />
      </Right>
      <VerticalLine />
    </Container>
  );
};

export default SplitScreen;
