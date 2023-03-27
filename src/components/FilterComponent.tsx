import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import filterIcon from "../assets/icons/filterIcon.png"




const FiletrContainer = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
width: 294px;
height: 546px;
background-color: #C73E27;
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
`

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
const CheckboxDisplay = styled.div`
   width: 18px;
    height: 18px;
    border: 2px solid white;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 10px;
`;
const CheckboxText = styled.div`
font-size: 16px;
padding-left: 15px;
color: white;
line-height: 23px;
`;


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
        <div style={{"display":"flex", "flexDirection":"row", "padding":"20px","alignItems":"center"}}>
        <CheckboxDisplay />
        <CheckboxText>Applied Companies</CheckboxText>
        </div>
        
    </FiletrContainer>
  )
}
