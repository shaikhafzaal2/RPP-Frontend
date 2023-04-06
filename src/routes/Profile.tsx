import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    color: #C73E27;
  }
`;

const MainContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

// Styled components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  margin: 0px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.3;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 0px;
  margin-left: 10%;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-top: 100px;
  width: 100%;
`;
const ItemLeftContainer = styled.div`
  display: flex;
  flex: 0.35;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
  padding: 0px;
  margin: 0px;
`;
const ItemRightContainer = styled.div`
  display: flex;
  flex: 0.65;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  padding: 0px;
  margin: 0px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #c73e27;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
`;

const Button = styled.button`
  height: 35px;
  width: 215px;
  margin: 10px 0;
  padding: 10px;
  background-color: #c73e27;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 25px;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #c73e27;
  margin-left: 20px;
`;

// const LabelContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: flex-start;
//   padding: 10px;
// `;

// Component
const ProfileScreen = () => {
  return (
    <MainContainer>
      <ProfileContainer>
        <GlobalStyle />
        <LeftContainer>
          <ItemContainer>
            <ItemLeftContainer>
              <Label>Name :</Label>
              <Label>Ph Number :</Label>
              <Label>Faculty :</Label>
              <Label>Degree :</Label>
              <Label>Stream :</Label>
              <Label>Start Year :</Label>
              <Label>End Year :</Label>
              <Label>CGPA :</Label>
            </ItemLeftContainer>
            <ItemRightContainer>
              <Value>John Doe</Value>
              <Value>+91987456321</Value>
              <Value>Faculty of Engineering and Technology</Value>
              <Value>B.Tech</Value>
              <Value>Computer Science and Engineering</Value>
              <Value>2019</Value>
              <Value>2023</Value>
              <Value>8.2</Value>
            </ItemRightContainer>
          </ItemContainer>
        </LeftContainer>
        <RightContainer>
          <ProfileImage src="https://via.placeholder.com/150" alt="Profile Picture" />
          <Button>View Resume</Button>
          <Button>Edit Profile</Button>
        </RightContainer>
      </ProfileContainer>
    </MainContainer>
  );
};

export default ProfileScreen;
