import styled from 'styled-components';
import React from 'react';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
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

export const PostedJobs = () => {
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
        <TableRow>
          <TableData>1</TableData>
          <TableData>SDE-1</TableData>
          <TableData>Karthik IT Ltd</TableData>
          <TableData>Lorem Ipsum </TableData>
          <TableData>900000</TableData>
          <TableData>No</TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>UI/UX Dev</TableData>
          <TableData>Afzal Tech</TableData>
          <TableData>Lorem Ipsum</TableData>
          <TableData>1200000</TableData>
          <TableData>No</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};
