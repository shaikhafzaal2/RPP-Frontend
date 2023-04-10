import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import filterIcon from "../assets/icons/filterIcon.png"
import { updateFilters } from 'actions';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { Filters } from 'types';
// import { updateFilters } from 'actions';




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
  const dispatch = useDispatch();

  const updateFilter = (props:any ) =>{
    console.log("updatefilter called");
    dispatch(updateFilters(props));
  }
  return (
    <FiletrContainer>
      <GlobalStyle />
      <FilterBox>
        <FilterIcon src={filterIcon} />
        <ComponentName>Filters</ComponentName>
        </FilterBox>
       
        <DropdownName>Faculty</DropdownName>
        <Select onChange={(e)=>{
          console.log("Selected"+e.target.value);
             updateFilter({
              payload: {
                faculty: e.target.value=="All"?null:e.target.value,               
              },
              type: ''
            })}}>
            <Option value={undefined}>All</Option> 
            <Option value="Faculty of Engineering and Technology FET">FET</Option>
            <Option value="Faculty of Art and Design FAD">FAD</Option>
        </Select>
        
        <DropdownName>Department</DropdownName>
        <Select onChange={(e)=>{
              console.log("Selected"+e.target.value);
                updateFilter({
                  payload: {
                    department:  e.target.value=="All"?null:e.target.value,            
                  },
                  type: ''
                })
              }}>
            <Option value={undefined} >All</Option> 
            <Option value="CSE">CSE</Option>
            <Option value="ME">ME</Option>
        </Select>
        
        <DropdownName>Company Type</DropdownName>
        <Select onChange={(e)=>{
            console.log("Selected"+e.target.value);
              updateFilter({
                payload: {
                  type:  e.target.value=="All"?null:e.target.value,           
                },
                type: ''
              })
            }}>
            <Option value={undefined}>All</Option>  
            <Option value="Gaming">Gaming</Option>
            <Option value="Fintech">Fintech</Option>
            <Option value="Software Development">Software Development</Option>
        </Select>
        <div style={{"display":"flex", "flexDirection":"row", "padding":"20px","alignItems":"center"}}>
        <CheckboxDisplay />
        <CheckboxText>Applied Companies</CheckboxText>
      </div>
    </FiletrContainer>
  );
};
