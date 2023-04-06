import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import filterIcon from '../assets/icons/filterIcon.png';

const FiletrContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 294px;
  height: 546px;
  background-color: #c73e27;
  border-radius: 10px;
  box-shadow: 0px 3.36px 5.04px 2.52px rgba(0, 0, 0, 0.25);
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
  }
`;

const ComponentName = styled.p`
  font-size: 22px;
  margin-bottom: 1px;
  margin-top: 10px;
  color: white;
  margin-bottom: 10px;
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const FilterIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const DropdownName = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: white;
  text-align: left;
  padding-left: 20px;
`;

const Select = styled.select`
  width: 235px;
  height: 50px;
  margin-left: 20px;
  /* margin-right: 50px; */
  padding: 15px;
  font-size: 16px;
  border-radius: 6px;

  box-shadow: 0px 3.36px 11.76px rgba(0, 0, 0, 0.1);
`;

const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre;
  padding: 10px;
  gap: 1px;
`;
type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 3px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16.8px;
`;

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <CheckboxLabel>
    <CheckboxInput checked={checked} onChange={onChange} />
    {label}
  </CheckboxLabel>
);

export const FilterComponent = () => {
  return (
    <FiletrContainer>
      <GlobalStyle />
      <FilterBox>
        <FilterIcon src={filterIcon} />
        <ComponentName>Filters</ComponentName>
      </FilterBox>

      <DropdownName>Faculty</DropdownName>
      <Select>
        <Option value="fet">FET</Option>
        <Option value="fad">FAD</Option>
      </Select>

      <DropdownName>Department</DropdownName>
      <Select>
        <Option value="cse">CSE</Option>
        <Option value="me">ME</Option>
      </Select>

      <DropdownName>Company Type</DropdownName>
      <Select>
        <Option value="gaming">Gaming</Option>
        <Option value="fintech">Fintech</Option>
      </Select>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '20px', alignItems: 'center' }}>
        <Checkbox label="Applied Companies" checked={false} onChange={() => {}} />
      </div>
    </FiletrContainer>
  );
};
