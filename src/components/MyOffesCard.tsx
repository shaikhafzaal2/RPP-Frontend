import React from 'react';
import styled from 'styled-components';

interface CardProps {
  serialNumber: string;
  companyName: string;
  jobProfile: string;
  appliedDate: string;
  ctc: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #433270;
  border-radius: 10px;
  border-left-width: 4px;
  border-left-color: #433270;
  padding: 20px;
  margin-top: 10px;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SerialContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(67, 50, 112, 0.25);
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  color: #433270;
`;

const Value = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const MyOffersCard: React.FC<CardProps> = ({
  serialNumber,
  companyName,
  jobProfile,
  appliedDate,
  ctc,
}) => {
  return (
    <CardContainer>
      <SerialContainer>
        <Value>{serialNumber}</Value>
      </SerialContainer>

      <ComponentContainer>
        <Label>Company Name</Label>
        <Value>{companyName}</Value>
      </ComponentContainer>

      <ComponentContainer>
        <Label>Job Profile</Label>
        <Value>{jobProfile}</Value>
      </ComponentContainer>

      <ComponentContainer>
        <Label>Applied Date</Label>
        <Value>{appliedDate}</Value>
      </ComponentContainer>

      <ComponentContainer>
        <Label>CTC</Label>
        <Value>{ctc}</Value>
      </ComponentContainer>
    </CardContainer>
  );
};
