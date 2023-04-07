import React from 'react';
import styled from 'styled-components';
import companyLogo from '../assets/logos/companyLogo.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: space-between;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CompanyName = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 35px;
  margin-bottom: 1px;
  margin-top: 0px;
  color: #c73e27;
  font-weight: 600;
`;

const Tagline = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  color: #6c757d;
  font-size: 20px;
  margin-bottom: 2px;
  margin: 0px;
  font-weight: 600;
`;
const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-top: 20px;
  margin-bottom: 2px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40px 40px;
  grid-gap: 0px;
  margin-top: 35px;
`;

const Label = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #c73e27;
  align-items: center;
  font-weight: 600;
`;
const Value = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 18px;
  color: #000000;
`;

const Heading = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #c73e27;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 35px;
`;

const ApplyButton = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  width: 250px;
  height: 45px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  background-color: #c73e27;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

export const Description = () => {
  return (
    <DescriptionContainer>
      <GlobalStyle />
      <TopContainer>
        <InsideContainer>
          <CompanyName>Epic Games</CompanyName>
          <Tagline>Game Company</Tagline>
        </InsideContainer>

        <Logo src={companyLogo} />
      </TopContainer>
      <Grid>
        <Label>Work Location</Label>
        <Label>Role</Label>
        <Label>CTC</Label>
        <Value>Bangalore</Value>
        <Value>SDE-1</Value>
        <Value>25LPA</Value>
      </Grid>
      <Heading>About Us</Heading>
      <Content>
        Epic Games spans across 19 countries with 55 studios and 4,500+ employees globally. For over
        25 years, we have been making award-winning games and engine technology that empowers others
        to make visually stunning games and 3D content that bring environments to life like never
        before. Epics award-winning Unreal Engine technology not only provides game developers the
        ability to build high-fidelity, interactive experiences for PC, console, mobile, and VR, it
        is also a tool being embraced by content creators across a variety of industries such as
        media and entertainment, automotive, and architectural design. As we continue to build our
        Engine technology and develop remarkable games, we strive to build teams of world-class
        talent
      </Content>
      <Heading>Job Duties</Heading>
      <Content>
        Implement, augment and maintain gameplay features and systems that underpin Fortnite
        Creative Diagnose and fix memory and performance issues to unlock the full potential of
        Fortnite Creative for creators and players Solve technical challenges in the development of
        the Unreal Editor for Fortnite that will take Fortnite Creative experiences to the next
        level Build and maintain bridges with other teams within and outside of Fortnite Creative to
        help drive and maintain vision Look for ways to push the technology forward in new and
        innovative ways Deep-dive on various technical gameplay framework topics, ensuring that the
        architecture and code are robust and scalable.
      </Content>
      <Heading>Required Qualifications</Heading>
      <Content>
        Experience developing games professionally, and shipping AAA titles A keen analytical mind,
        with strong problem-solving skills Strong C++ skills and the ability to code and architect
        gameplay mechanics and tools Strong math skills Well versed in games and the ability to
        articulate what is strong/weak about the design of existing games (an interest in online
        games is preferred) Excellent communication and interpersonal skills Console experience
        Experience working on a live service game Self-motivated, strong work ethic, and able to
        work independently Creativity in problem-solving and the ability to think outside of the
        established solutions Keen interest in games
      </Content>
      <ButtonContainer>
        <ApplyButton>Apply Now</ApplyButton>
      </ButtonContainer>
    </DescriptionContainer>
  );
};
