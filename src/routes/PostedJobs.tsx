import styled from 'styled-components';
import React from 'react';
import { useAppSelector } from 'modules/hooks';
import { selectCompany } from 'selectors';
import { useDispatch } from 'react-redux';
import { deleteCompany } from 'actions';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  min-width: 150px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;


export const PostedJobs = () => {
  const companiesdata = useAppSelector(selectCompany).companies;

  const dispatch = useDispatch();

  const handleRemoveBtn = (id:String)=> {
    console.log("this is delete id: "+id);
    dispatch(deleteCompany(id));
  }


  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>S.no</TableHeader>
          <TableHeader>Job Title</TableHeader>
          <TableHeader>Company Name</TableHeader>
          <TableHeader>Job Description</TableHeader>
          <TableHeader>Salary</TableHeader>
          <TableHeader>Remove</TableHeader>
        </TableRow>
      </thead>
      <tbody>
       {companiesdata&& companiesdata.map((company:any,index:any) => (
          <TableRow key={index+1}>
            <TableData >{index+1}</TableData>
            <TableData >{company.role}</TableData>
            <TableData >{company.name}</TableData>
            <TableData >{company.jd}</TableData>
            <TableData >{company.ctc} LPA</TableData>
            <TableData ><RemoveButton onClick={()=>handleRemoveBtn(company._id)} >Delete</RemoveButton></TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
