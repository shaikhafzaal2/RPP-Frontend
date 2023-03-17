import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 240px;
  width: 720px;
  border: 1px solid #ccc;
  border-radius: 10px;
  border-left-width: 4px; 
  border-left-color: #C73E27;
  box-shadow:2px 2px 16px 6px rgba(0, 0, 0, 0.12);
  
 
  
`;

const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  padding: 16px;
`;

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.3;
  background-color: #fff;
  border-radius: 10px;
`;

const CompanyName = styled.p`
    
    font-size: 24px;
    margin-bottom: 1px;
`;

const Tagline = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Location = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const Department = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 5px;
  
`;

const ApplyButton = styled.button`
  padding: 8px 20px;
  font-size: 16px;
  border: none;
  background-color: #C73E27;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

function CardComponent() {
  return (
    <CardContainer>
      <LeftPane>
        <GlobalStyle />
        <CompanyName>Company Name</CompanyName>
        <Tagline>Tagline of the company</Tagline>
        <Location>Location of the company</Location>
        <Department>FET</Department>
      </LeftPane>
      <RightPane>
        <Logo src="path/to/logo.png" alt="Company Logo" />
        <ApplyButton>Apply Now</ApplyButton>
      </RightPane>
    </CardContainer>
  );
}

export default CardComponent;