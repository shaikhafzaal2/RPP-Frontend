import React from 'react';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { Container, responsive } from 'styled-minimal';
import { Container } from 'styled-minimal/lib';
// import { appColor, headerHeight, spacer } from 'modules/theme';
import { headerHeight,spacer } from 'modules/theme';
// import { logOut } from 'actions';
// import Icon from 'components/Icon';

import Logo from 'components/Logo';
import profile from '../assets/icons/profile.png'
import dropdown from '../assets/icons/dropdown.png'

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: #ffffff;
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;

    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(3)};
`;




// const Logout = styled.button`
  // align-items: center;
  // color: #fff;
  // display: flex;
  // font-size: 1.3rem;
  // padding: ${spacer(2)};

//   ${responsive({ lg: { fontSize: '1.6rem' } })}; /* stylelint-disable-line */

//   &.active {
//     color: #fff;
//   }

//   span {
//     display: inline-block;
//     margin-right: 0.4rem;
//     text-transform: uppercase;
//   }
// `;
const Offer = styled.span`
align-items: center;
color: #433270;
padding:35px;
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 22px;

`;
const Profile = styled.img`
height: 20%
width:20%
padding:10px
`;
const Dropdown = styled.img`
padding:5px;
height: 20%
width:20%
justify-content: center;
align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

export default function Header() {
  // const dispatch = useDispatch();

  // const handleClickLogout = () => {
  //   dispatch(logOut());
  // };

  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
        <Logo />
        {/* <Logout onClick={handleClickLogout}>
          <span>logout</span>
          <Icon name="sign-out" width={16} />
        </Logout> */}
        <ButtonContainer>
        <Offer>MY OFFERS</Offer>
        <Profile src={profile}/>
        <Dropdown src={dropdown} />
        </ButtonContainer>
       
      </HeaderContainer>
    </HeaderWrapper>
  );
}
