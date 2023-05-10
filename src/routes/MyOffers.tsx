import React from 'react';
import styled from 'styled-components';
import { MyOffersCard } from 'components/MyOffesCard';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Header = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-transform: uppercase;

  color: #c73e27;
`;

export const MyOffers = () => {
  return (
    <MainContainer>
      <Header>My Offers</Header>

      <MyOffersCard
        serialNumber="1"
        companyName="Example Inc."
        jobProfile="Frontend Developer"
        appliedDate="2023-05-10"
        ctc="1000000"
      />
      <MyOffersCard
        serialNumber="2"
        companyName="Example1 Inc."
        jobProfile="Backend Developer"
        appliedDate="2023-05-12"
        ctc="1000000"
      />
    </MainContainer>
  );
};
