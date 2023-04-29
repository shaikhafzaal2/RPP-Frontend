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

export const ViewStudents = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>S.no</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email address</TableHeader>
          <TableHeader>Contact</TableHeader>
          <TableHeader>Applied to</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableData>1</TableData>
          <TableData>John Doe</TableData>
          <TableData>john.doe@example.com</TableData>
          <TableData>(123) 456-7890</TableData>
          <TableData>Software Engineer</TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>Jane Smith</TableData>
          <TableData>jane.smith@example.com</TableData>
          <TableData>(987) 654-3210</TableData>
          <TableData>UI Designer</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};
