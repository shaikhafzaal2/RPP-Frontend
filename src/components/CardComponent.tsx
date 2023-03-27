import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import locationIcon from "../assets/icons/locationIcon.png"


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
  height: 200px;
  width: 90%;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #C73E27;
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
  justify-content: right;
  flex: 0.3;
  background-color: #fff;
  border-radius: 10px;
`;

const CompanyName = styled.p`
    
    font-size: 22px;
    margin-bottom: 1px;
    margin-top: 10px;
`;

const Tagline = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
  margin:0px
`;

const Location = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
  
`;
const Department = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
`;

const Logo = styled.img`
  height: 50px;
  margin-top: 30px;
  margin-bottom: 2px;
  
`;
const LocationIcon = styled.img`
  height: 15px;
  padding-right: 5px;
  margin-top: 5px;
  
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
const BottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;
const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-right:40px
`;

const ComponentName = styled.p`
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12.2927px;
line-height: 17px;
color: #C73E27;
margin-bottom: 8px;
`;

const RoleComponent = styled.p`
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15.8049px;
margin: 0;
`;

function CardComponent() {
  return (
    <CardContainer>
      <LeftPane>
        <GlobalStyle />
        <CompanyName>Company Name</CompanyName>
        <Tagline>Tagline of the company</Tagline>
        <Location>
        <LocationIcon src={locationIcon} />
          Location of the company</Location>
        <Department>Faculty</Department>
        <BottomContainer>
        <ComponentContainer>
        <ComponentName>Role</ComponentName>
        <RoleComponent>Game Developer</RoleComponent>
        </ComponentContainer>
        <ComponentContainer>
        <ComponentName>CTC</ComponentName>
        <RoleComponent>18-24LPA</RoleComponent>
        </ComponentContainer>
        </BottomContainer>
      </LeftPane>
      <RightPane>
        <Logo src="path/to/logo.png" alt="Company Logo" />
        <ApplyButton>Apply Now</ApplyButton>
      </RightPane>
    </CardContainer>
  );
}

export default CardComponent;