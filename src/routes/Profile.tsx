import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { EditProfile } from 'components/EditProfile';
// import { useDispatch } from 'react-redux';
import { useAppSelector } from 'modules/hooks';
import { selectProfile, selectUser } from 'selectors';
// import { getProfileRequest } from 'actions';

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
  align-items: flex-start;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  margin: 0px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 0px;
  margin-left: 75px;
  margin-top: 75px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 8px;
  margin-top: 75px;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
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
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 22px;
  min-width: 300px;
  min-height:50px;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #c73e27;
  border-radius: 8px;
  margin-left: 20px;
  padding: 15px;
`;

// Component

const ProfileScreen = () => {
  const profiledata = useAppSelector(selectProfile).profiles;
  const currUser = useAppSelector(selectUser).user.homeAccountId;
  console.log("Homeaccountid is: "+currUser)

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProfileRequest(currUser));
   
  }, [isPopupOpen]);

useEffect(() => {
  

  handlePopupClose();
}, [profiledata]);

  

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleResumeClick = () => {
    
    window.open(profiledata.resumenew?profiledata.resumenew:'', '_blank');
    // return <iframe src={profiledata.resume} width="100%" height="600px" />
  };

  


  return (
    <MainContainer>
      <ProfileContainer>
        <GlobalStyle />
        <LeftContainer>
          <Grid>
            <Label>Name :</Label>
            <Value>{profiledata.name?profiledata.name:'John Doe'}</Value>
            <Label>Ph Number :</Label>
            <Value>{profiledata.phoneNumber?profiledata.phoneNumber:'1234567891'}</Value>
            <Label>Faculty :</Label>
            <Value>{profiledata.faculty?profiledata.faculty:'Faculty of ABC'}</Value>
            <Label>Degree :</Label>
            <Value>{profiledata.degree?profiledata.degree:'Masters'}</Value>
            <Label>Stream :</Label>
            <Value>{profiledata.stream?profiledata.stream:'Computer Science'}</Value>
            <Label>Start Year :</Label>
            <Value>{profiledata.startYear?profiledata.startYear:'2023'}</Value>
            <Label>End Year :</Label>
            <Value>{profiledata.endYear?profiledata.endYear:'2023'}</Value>
            <Label>CGPA :</Label>
            <Value>{profiledata.cgpa?profiledata.cgpa:10}</Value>
          </Grid>
        </LeftContainer>
        <RightContainer>
          <ProfileImage src={profiledata.profilePic?profiledata.profilePic:''} />
          <Button onClick={handleResumeClick}>View Resume</Button>
          <Button onClick={handleButtonClick}>Edit Profile</Button>
          {isPopupOpen  && <EditProfile onClose={handlePopupClose} />}
        </RightContainer>
      </ProfileContainer>
    </MainContainer>
  );
};

export default ProfileScreen;
