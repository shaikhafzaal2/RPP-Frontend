import React, { useEffect } from 'react';
import styled from 'styled-components';
import companyLogo from '../assets/logos/companyLogo.png';
import { createGlobalStyle } from 'styled-components';
import { Company, RouteParams } from 'types';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from 'modules/hooks';
import { selectCompany, selectProfile, selectUser } from 'selectors';
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
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  color: #6c757d;
  font-size: 20px;
  margin-bottom: 2px;
  margin: 0px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-top: 20px;
  margin-bottom: 2px;
  @media (max-width: 768px) {
    height: 5rem;
    width: 5rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px 40px;
  grid-gap: 0px;
  margin-top: 35px;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    display: block;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: 40px 40px;
    grid-gap: 0px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #c73e27;
  align-items: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;
const Value = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 18px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const Heading = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #c73e27;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { id }: RouteParams = useParams();
  console.log('id is: ' + JSON.stringify(id));

  const companiesdata = useAppSelector(selectCompany).companies;
  const profiledata = useAppSelector(selectProfile).profiles;
  const userdata = useAppSelector(selectUser);
  const selectedCompany: Company = companiesdata.find((c: Company) => c._id === id);
  console.log('this is companydata: ' + JSON.stringify(selectedCompany));

  const handleApplyBtn = (e: any) => {
    if (userdata.user.eligible) {
      selectedCompany.requiredcgpa <= profiledata.cgpa
        ? window.open(e)
        : alert('You are not eligible for this placement drive');
    } else {
      alert(
        'You are removed from Placement Activities. Contact Placement Department for more details',
      );
    }
  };
  const selectedCompanyDate = new Date(selectedCompany.date);
  const formattedDate = selectedCompanyDate.toLocaleDateString('en-GB');
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
        <LabelContainer style={{ paddingRight: '20px' }}>
          <Label>Work Location</Label>
          <Value>{selectedCompany.jobLocation}</Value>
        </LabelContainer>
        <LabelContainer>
          <Label>Role</Label>
          <Value>{selectedCompany.role}</Value>
        </LabelContainer>

        <LabelContainer>
          <Label>CTC</Label>
          <Value>{selectedCompany.ctc} LPA</Value>
        </LabelContainer>

        <LabelContainer>
          <Label>Apply By</Label>
          <Value>{formattedDate}</Value>
        </LabelContainer>
      </Grid>
      <Heading>About Us</Heading>
      <Content>
        {selectedCompany.aboutCompany.split('\n').map((e, i) => (
          <p key={i + 1}>{e}</p>
        ))}
      </Content>
      <Heading>Job Duties</Heading>
      <Content>
        {selectedCompany.jd.split('\n').map((e, i) => (
          <p key={i + 1}>{e}</p>
        ))}
      </Content>
      <Heading>Required Qualifications</Heading>
      <Content>
        {selectedCompany.requiredQualifications.split('\n').map((e, i) => (
          <p key={i + 1}>{e}</p>
        ))}
      </Content>
      <ButtonContainer>
        <ApplyButton onClick={() => handleApplyBtn(selectedCompany.applyLink)}>
          Apply Now
        </ApplyButton>
      </ButtonContainer>
    </DescriptionContainer>
  );
};
