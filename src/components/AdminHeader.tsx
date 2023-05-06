import { responsive } from '@styled-system/css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { getCompanyRequest, logoutSuccess } from 'actions';
import { getStudentsRequest } from 'actions/students';

interface ChildProps {
  onStateChange: (childState: string) => void;
}
interface ChildState {
  myState: string;
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f2711d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoContainer = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 15%;
  width: 15%;
  margin-right: 10px;
`;

const WelcomeText = styled.span`
  color: white;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  height: 25%;
  width: 100%;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`;

interface ButtonProps {
  istrue: boolean;
}

const PageButton = styled.button<ButtonProps>`
  padding: 20px 20px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 16px;
  border:  ${(props) => (props.istrue ?"2px solid white":"2px solid white")};;
  background-color: ${(props) => (props.istrue ?"white":"none")};
  color:${(props) => (props.istrue ?"#f2711d":"white")};;
  cursor: pointer;
  border-radius: 5px;
`;

const Logout = styled.button`
  align-items: center;
  border: 2px solid white;
  border-radius: 8.24176px;
  color: white;
  display: flex;
  font-size: 15px;
  padding: 10px;
  margin-left: 5px;

  ${responsive({ lg: { fontSize: '1.6rem' } })}; /* stylelint-disable-line */

  &.active {
    color: #000000;
  }
  &:hover {
    border: 2px solid #c73e27;
    background-color: #c73e27;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-right: 10px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  height: 40px;
  width: 300px;
  background-color: #f7f7f7;
  border-radius: 5px;
  margin-right: 20px;
  padding: 0 10px;
`;

const SearchInput = styled.input`
  background-color: white;
  border: 0;
  color: grey;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: grey;
  }

  :focus {
    border: 2px solid white;
    outline: none;
  }
`;

export const AdminHeader: React.FC<ChildProps> = ({ onStateChange }) => {
  const [myState, setMyState] = useState<ChildState>({
    myState: '',
  });

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("search called");
      myState.myState=='postedJob'? dispatch(getCompanyRequest({"search":searchTerm})):null;
      myState.myState=='students'? dispatch(getStudentsRequest({"search":searchTerm})):null;
    }, 1000);

    return () => clearTimeout(timerId);
  }, [searchTerm]);
  const handleClick = (newState: string) => {
    setMyState({ myState: newState });
    onStateChange(newState);
  };

  

  const handleClickLogout = () => {

    dispatch(logoutSuccess());
  };
  
  console.log(myState.myState);
  return (
    <MainContainer>
      <GlobalStyle />
      <LogoContainer>
        <Logo src="https://cdn.msruas.ac.in/ruas/imager/logos/identity/114150/university-site-logo_eb6a0f6b016d9a54184863465c76165f.png" />
        
        
        <Logout onClick={handleClickLogout}>
          <span>Logout</span>
          <Icon name="sign-out" width={16} />
          
        </Logout>
     
      </LogoContainer>
      <WelcomeText>Welcome to Admin Panel</WelcomeText>
      <BottomContainer>
        <ButtonContainer>
        <PageButton istrue={myState.myState=='students'} onClick={() => handleClick('students')}>View Students</PageButton>
        <PageButton istrue={myState.myState=='postedJob'} onClick={() => handleClick('postedJob')}>View Posted Jobs</PageButton>
        <PageButton istrue={myState.myState=='postJobs'} onClick={() => handleClick('postJobs')}>Post Jobs</PageButton>
        </ButtonContainer>
        {myState.myState != 'postJobs'&& <SearchContainer>
        <Icon name="search" width={16} />
        <SearchInput value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} 
        placeholder="Search" />
        </SearchContainer>}
      </BottomContainer>
    </MainContainer>
  );
};
