import { postCompany } from 'actions';
import { useAppSelector } from 'modules/hooks';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'selectors';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  height: 40px;
  margin-bottom: 1rem;
`;

const DescriptionBox = styled.textarea`
  padding: 2rem;
  margin-bottom: 1rem;
  resize: vertical;
`;

const DescriptionGridItem = styled(GridItem)`
  grid-column: 1 / -1;
`;

const ApplyLinkGridItem = styled(GridItem)`
  grid-column: 1 / -1;
`;

const SubmitButton = styled.button`
  padding: 1.5rem;
  margin-top: 1rem;
  grid-column: 2 / 3;
  justify-self: center;
  background-color: grey;
  color: white;
  border-radius: 2px;
  font-size: 15px;
`;


const Select = styled.select` 
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black; 
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


export const PostJobs: React.FC = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(postCompany(data));
    formRef.current?.reset();
  };

  const filterdata = useAppSelector(selectFilter).infoFilters;
  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <GridItem>
        <InputLabel htmlFor="name">Company Name:</InputLabel>
        <Input type="text" name="name" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="type">Type:</InputLabel>
        <Select name='type' required={true} defaultValue={filterdata.companyTypes[0]['name']} onChange={()=>[]}>
              {filterdata.companyTypes?.map(CompanyType => (                  
                 <Option key={CompanyType['name']} value={CompanyType['name']}>{CompanyType['name']}</Option>
              ))}     
              
        </Select>
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="ctc">Salary:</InputLabel>
        <Input type="number" step=".01" name="ctc" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="jobLocation">Job Location:</InputLabel>
        <Input type="text" name="jobLocation" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="faculty">Faculty:</InputLabel>
        <Select name='faculty' required={true} defaultValue={filterdata.faculties[0]['name']} onChange={()=>[]}>
              {filterdata.faculties?.map(faculty => (                   
                 <Option key={faculty['keyword']} value={faculty['name']}>{faculty['name']}</Option>
              ))}     
              
        </Select>
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="department">Department:</InputLabel>
        <Select name='department' required={true} defaultValue={filterdata.departments[0]['name']}  onChange={()=>[]}>

              {filterdata.departments?.map(deg => (                   
                 <Option key={deg['name']} value={deg['name']}>{deg['name']}</Option>
              ))}     
     
        </Select>
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="date">Date:</InputLabel>
        <Input type="date" prefix='dd/mm/yyyy' name="date" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="role">Role:</InputLabel>
        <Input type="text" name="role" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="requiredcgpa">Required CGPA:</InputLabel>
        <Input type="number" step=".01" max={10.00} name="requiredcgpa" required />
      </GridItem>

      <DescriptionGridItem>
        <InputLabel htmlFor="aboutCompany">About Company:</InputLabel>
        <DescriptionBox name="aboutCompany" />
        <InputLabel htmlFor="jd">Job Description:</InputLabel>
        <DescriptionBox name="jd" />
        <InputLabel htmlFor="requiredQualifications">Required Qualifications:</InputLabel>
        <DescriptionBox name="requiredQualifications" />
      </DescriptionGridItem>
      <ApplyLinkGridItem>
        <InputLabel htmlFor="applyLink">Apply Link:</InputLabel>
        <Input type="text" name="applyLink" required />
      </ApplyLinkGridItem>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </FormContainer>
  );
};
