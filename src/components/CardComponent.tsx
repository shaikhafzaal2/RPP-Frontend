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
  height: 200px;
  width: 80%;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #c73e27;
  border-radius: 10px;
  border-left-width: 4px;
  border-left-color: #c73e27;
  box-shadow: 2px 2px 16px 6px rgba(0, 0, 0, 0.12);
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
  align-items: flex-end;
  float: right;
  flex: 0.3;
  background-color: #fff;
  border-radius: 10px;

  margin-right: 25px;
`;

const CompanyName = styled.p`
  font-size: 22px;
  margin-bottom: 1px;
  margin-top: 0px;
`;

const Tagline = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 2px;
  margin: 0px;
`;

const Location = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
`;
const Department = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-top: 20px;
  margin-bottom: 2px;
`;
const LocationIcon = styled.img`
  height: 15px;
  padding-right: 5px;
  margin-top: 5px;
  margin-right: 10px;
`;

const ApplyButton = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  font-size: 16px;
  border: none;
  background-color: #c73e27;
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
  font-size: 12.2927px;
  line-height: 17px;
  color: #c73e27;
  margin-bottom: 8px;
`;

const RoleComponent = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
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
  font-size: 12.2927px;
  line-height: 17px;
  color: #c73e27;
  margin-bottom: 8px;
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
        <Link to="/description">
          <ApplyButton>Apply Now</ApplyButton>
        </Link>
        <Link to ={`/description/${company._id}`}>
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
