import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import locationIcon from '../assets/icons/locationIcon.png';
import readmoreIcon from '../assets/icons/readmore.png';
import companyLogo from '../assets/logos/companyLogo.png';
import { Company } from 'types';
import { Link } from 'react-router-dom';

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
  height: 20rem;
  width: 80%;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #c73e27;
  border-radius: 10px;
  border-left-width: 4px;
  border-left-color: #c73e27;
  box-shadow: 2px 2px 16px 6px rgba(0, 0, 0, 0.12);
  @media (max-width: 768px) {
    height: 20rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
`;

const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  padding-top: 15px;
  margin-left: 25px;
`;

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  float: right;
  flex: 0.3;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 25px;
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: flex-end;
    flex: 0.5;
  }
`;

const CompanyName = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1px;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Tagline = styled.p`
  color: #6c757d;
  font-size: 1.5rem;
  margin-bottom: 2px;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1px;
  }
`;

const Location = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1px;
  }
`;
const Department = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2px;
  @media (max-width: 768px) {
    text-overflow: ellipsis ' [..]';
    font-size: 1rem;
    margin-bottom: 1px;
  }
`;

const Logo = styled.img`
  height: 5rem;
  width: 5rem;
  margin-top: 20px;
  margin-bottom: 2px;
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 1px;
  }
`;
const LocationIcon = styled.img`
  height: 15px;
  padding-right: 5px;
  margin-top: 5px;
  margin-right: 10px;
  @media (max-width: 768px) {
    height: 12px;
    padding-right: 2px;
    margin-right: 5px;
  }
`;

const ApplyButton = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 10px;
  font-size: 1.5rem;
  border: none;
  background-color: #c73e27;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 0.7rem 0.8rem;
    font-size: 1rem;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ComponentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding-right: 40px;
`;

const ComponentName = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 17px;
  color: #c73e27;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RoleComponent = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const ReadMore = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 17px;
  color: #c73e27;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ReadmoreIcon = styled.img`
  height: 10px;
  padding-left: 5px;
  margin-top: 5px;
`;

const CardComponent = ({ company }: { company: Company }) => {
  return (
    <CardContainer>
      <LeftPane>
        <GlobalStyle />
        <CompanyName>{company.name}</CompanyName>
        <Tagline>{company.type}</Tagline>
        <Location>
          <LocationIcon src={locationIcon} />
          {company.jobLocation}
        </Location>
        <Department>{company.faculty}</Department>
        <BottomContainer>
          <ComponentContainer>
            <ComponentName>Role</ComponentName>
            <RoleComponent>{company.role}</RoleComponent>
          </ComponentContainer>
          <ComponentContainer>
            <ComponentName>CTC</ComponentName>
            <RoleComponent>{company.ctc} LPA</RoleComponent>
          </ComponentContainer>
        </BottomContainer>
      </LeftPane>
      <RightPane>
        <Logo src={companyLogo} alt="Company Logo" />
        <Link to={`/description/${company._id}`}>
          <ApplyButton>Apply Now</ApplyButton>
        </Link>
        <Link to={`/description/${company._id}`}>
          <ReadMoreContainer>
            <ReadMore>Read more</ReadMore>
            <ReadmoreIcon src={readmoreIcon} />
          </ReadMoreContainer>
        </Link>
      </RightPane>
    </CardContainer>
  );
};

export default CardComponent;
