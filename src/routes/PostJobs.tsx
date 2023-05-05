import React from 'react';
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

export const PostJobs: React.FC = () => {
  return (
    <FormContainer>
      <GridItem>
        <InputLabel htmlFor="companyName">Company Name:</InputLabel>
        <Input type="text" name="companyName" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="type">Type:</InputLabel>
        <Input type="text" name="type" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="salary">Salary:</InputLabel>
        <Input type="text" name="salary" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="location">Job Location:</InputLabel>
        <Input type="text" name="location" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="faculty">Faculty:</InputLabel>
        <Input type="text" name="faculty" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="department">Department:</InputLabel>
        <Input type="text" name="department" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="date">Date:</InputLabel>
        <Input type="text" name="date" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="role">Role:</InputLabel>
        <Input type="text" name="role" required />
      </GridItem>
      <GridItem>
        <InputLabel htmlFor="requiredCgpa">Required CGPA:</InputLabel>
        <Input type="text" name="requiredCgpa" required />
      </GridItem>

      <DescriptionGridItem>
        <InputLabel htmlFor="aboutCompany">About Company:</InputLabel>
        <DescriptionBox name="aboutCompany" />
        <InputLabel htmlFor="description">Job Description:</InputLabel>
        <DescriptionBox name="description" />
      </DescriptionGridItem>
      <ApplyLinkGridItem>
        <InputLabel htmlFor="applyLink">Apply Link:</InputLabel>
        <Input type="text" name="applyLink" required />
      </ApplyLinkGridItem>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};
