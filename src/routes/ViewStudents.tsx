import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AdminRemoveStudent, getStudentsRequest } from 'actions/students';
import { useAppSelector } from 'modules/hooks';
import { selectStudents } from 'selectors';

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
interface ButtonProps {
  isAdd: boolean;
}
const RemoveButton = styled.button<ButtonProps>`
background-color: ${(props) => (props.isAdd ?"red":"green")};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRemoveData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
`;

export const ViewStudents = () => {
  const studentsdata = useAppSelector(selectStudents).students;

  const dispatch = useDispatch();

  useEffect(() => {
    
  dispatch(getStudentsRequest({}));
    
  }, []);

  const handleRemoveBtn = (e:any)=>{
    dispatch(AdminRemoveStudent({"homeAccountId":e.id, "eligible":e.eligible }))

  }




  return (
    <Table>
      <thead>
      
        <TableRow>
          <TableHeader>S.no</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email address</TableHeader>
          <TableHeader>Contact</TableHeader>
          <TableHeader>Eligible</TableHeader>
          <TableHeader>Remove/Add</TableHeader>
        </TableRow>
      </thead>
      <tbody>
      {studentsdata&& studentsdata.map((student:any,index:any) => (
          <TableRow key={index+1}>
            <TableData >{index+1}</TableData>
            <TableData >{student.name}</TableData>
            <TableData >{student.email}</TableData>
            <TableData >{student.phoneNumber}</TableData>
            <TableData >{student.eligible?"Yes":'No'} </TableData>
            <TableRemoveData ><RemoveButton isAdd={student.eligible} onClick={()=>handleRemoveBtn({id:student.homeAccountId,eligible:!student.eligible})} >{student.eligible==true?"Remove":'Add'}</RemoveButton></TableRemoveData>
          </TableRow>
        ))}
       
      </tbody>
    </Table>
  );
};
