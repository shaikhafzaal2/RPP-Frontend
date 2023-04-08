import React, { useEffect } from 'react';
import styled from 'styled-components';
import companyLogo from '../assets/logos/companyLogo.png';
import { createGlobalStyle } from 'styled-components';
import { Company, RouteParams } from 'types';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from 'modules/hooks';
import { selectCompany } from 'selectors';
// import { useParams } from 'react-router-dom';
// import { RouteParams } from 'types';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  padding-left: 15%;
  padding-right: 15%;
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
  margin-bottom: 5%;
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
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  const {id}: RouteParams = useParams();
  console.log("id is: "+ JSON.stringify(id));

  const companiesdata = useAppSelector(selectCompany).companies;
  const selectedCompany: Company = companiesdata.find((c:Company) => c._id === id);
  console.log('this is companydata: ' + JSON.stringify(selectedCompany));
  return (
    <DescriptionContainer>
      <GlobalStyle />
      <TopContainer>
        <InsideContainer>
          <CompanyName>{selectedCompany.name}</CompanyName>
          <Tagline>{selectedCompany.type}</Tagline>
        </InsideContainer>

        <Logo src={companyLogo} />
      </TopContainer>
      <Grid>
        <Label>Work Location</Label>
        <Label>Role</Label>
        <Label>CTC</Label>
        <Value>{selectedCompany.jobLocation}</Value>
        <Value>{selectedCompany.role}</Value>
        <Value>{selectedCompany.ctc} LPA</Value>
      </Grid>
      <Heading>About Us</Heading>
      <Content>
       {selectedCompany.aboutCompany}
      </Content>
      <Heading>Job Duties</Heading>
      <Content>
        {selectedCompany.jd}
      </Content>
      <Heading>Required Qualifications</Heading>
      <Content>
       {selectedCompany.requiredQualifications}
      </Content>
      <ButtonContainer>
        <ApplyButton>Apply Now</ApplyButton>
      </ButtonContainer>
    </DescriptionContainer>
  );
};
