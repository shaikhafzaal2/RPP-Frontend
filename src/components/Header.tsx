import React from 'react';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { Container, responsive } from 'styled-minimal';

// import { appColor, headerHeight, spacer } from 'modules/theme';


// import { logOut } from 'actions';
import Icon from 'components/Icon';

import profile from '../assets/icons/profile.png'
import dropdown from '../assets/icons/dropdown.png'
import { Container, responsive,  } from 'styled-minimal';
import {  headerHeight, spacer } from 'modules/theme';
// import { logOut } from 'actions';


import Logo from 'components/Logo';
// import { useMsal } from '@azure/msal-react';
import { logoutRequest } from 'actions';
import { useDispatch } from 'react-redux';
// import { useMsal } from '@azure/msal-react';
// import { useMsal } from '@azure/msal-react';

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




const Logout = styled.button`
  align-items: center;
  color: #000000;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: { fontSize: '1.6rem' } })}; /* stylelint-disable-line */

  &.active {
    color: #000000;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;
const Offer = styled.span`

color: #433270;
padding:30px;
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;


`;
const Profile = styled.img`
height: 20%;
width:20%;
padding:10px;
`;
const Dropdown = styled.img`
padding:2px;
height: 8%;
width:8%;
justify-content: center;
align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  
`;

export default function Header() {
  const dispatch = useDispatch();
  // const { instance } = useMsal();

  const handleClickLogout = () => {
  //   instance.logoutPopup({
  //                 postLogoutRedirectUri: "/",
  //             }).then(()=>{dispatch(logoutRequest())});
  // };

//   instance.logoutRedirect({
//     postLogoutRedirectUri: "/",
// })
dispatch(logoutRequest())
};



  // const handleLogout = () => {
  //   // localStorage.clear();
  //   dispatch(logoutRequest);
  //     // if (logoutType === "popup") {
  //     //   // dispatch(logoutRequest);
  //     //     // instance.logoutPopup({
  //     //     //   mainWindowRedirectUri: "/"
            
  //     //     // });
  //     //     // dispatch(logoutRequest);
  //     // } else if (logoutType === "redirect") {
  //     //   // dispatch(logoutRequest);
  //     //     instance.logoutRedirect({
  //     //         postLogoutRedirectUri: "/",
  //     //     }).then(dispatch(logoutRequest));
          
  //     // }
  // }


  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
        <Logo />
        
        <ButtonContainer >
        <Offer>MY OFFERS</Offer>
        <Profile src={profile}/>
        <Dropdown src={dropdown} />
        <Logout onClick={handleClickLogout}>
          <span>logout</span>
          <Icon name="sign-out" width={16} />
        </Logout>
        </ButtonContainer>
       
      </HeaderContainer>
    </HeaderWrapper>
  );
}
