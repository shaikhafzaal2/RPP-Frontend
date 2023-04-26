import { responsive } from '@styled-system/css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Icon from './Icon';

interface ChildProps {
  onStateChange: (childState: string) => void;
}
interface ChildState {
  myState: string; // <-- change the name of the state property here
}

// interface PageButtonProps {
//   onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

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
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  height: 25%;
  width: 100%;
`;

const PageButton = styled.button`
  padding: 20px 20px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 16px;
  border: 2px solid white;
  background-color: none;
  color: #fff;
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

export const AdminHeader: React.FC<ChildProps> = ({ onStateChange }) => {
  const [myState, setMyState] = useState<ChildState>({
    myState: '', // <-- change the name of the state property here
  });
  const handleClick = (newState: string) => {
    setMyState({ myState: newState });
    onStateChange(newState);
  };
  console.log(myState.myState);
  return (
    <MainContainer>
      <GlobalStyle />
      <LogoContainer>
        <Logo src="https://cdn.msruas.ac.in/ruas/imager/logos/identity/114150/university-site-logo_eb6a0f6b016d9a54184863465c76165f.png" />
        <Logout>
          <span>Logout</span>
          <Icon name="sign-out" width={16} />
        </Logout>
      </LogoContainer>
      <WelcomeText>Welcome to Admin Panel</WelcomeText>
      <ButtonContainer>
        <PageButton onClick={() => handleClick('students')}>View Students</PageButton>
        <PageButton onClick={() => handleClick('postedJob')}>View Posted Jobs</PageButton>

        <PageButton onClick={() => handleClick('postJobs')}>Post Jobs</PageButton>
      </ButtonContainer>
    </MainContainer>
  );
};
