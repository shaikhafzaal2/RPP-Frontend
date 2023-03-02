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
import { logoutSuccess } from 'actions';

import { useDispatch } from 'react-redux';
// import { useMsal } from '@azure/msal-react';
// import { useMsal } from '@azure/msal-react';

import { useAppSelector } from 'modules/hooks';
import { selectUser } from 'selectors';
// import { fontSize } from 'styled-system';

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
  font-size: 15px;
  padding: ${spacer(2)};

  ${responsive({ lg: { fontSize: '1.6rem' } })}; /* stylelint-disable-line */

  &.active {
    color: #000000;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
    font-size: 15px;
  }
`;
const Offer = styled.a`
text-decoration: none;
color: #433270;
padding:30px;
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
margin-right: 10px;
&:hover {
    color: #555555;
  }
`;
const UserName = styled.span`
font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
color: #433270;
font-size: 15px;
margin-right: 5px;

`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Profile = styled.img`
 margin-right: 5px;
`;
const DropdownIcon = styled.img`
 margin-right: 10px;
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  background-color: #000000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  display: none;

  ${Profile}:hover & {
    display: block;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #C73E27;
  }
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
dispatch(logoutSuccess())
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

  const userAccount = useAppSelector(selectUser);



  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
        <Logo />
        
        <LinksContainer >
        <Offer>MY OFFERS</Offer>
        <UserName>{userAccount.user.account.name}</UserName>
        <ProfileIcon>
        <Profile src={profile}/>
        <DropdownIcon src={dropdown} />
        <DropdownMenu>
          <MenuItem>View Profile</MenuItem>
          <MenuItem>Change Password</MenuItem>
          <MenuItem>
          
          </MenuItem>
        </DropdownMenu>
        </ProfileIcon>
        <Logout onClick={handleClickLogout}>
          <span>logout</span>
          <Icon name="sign-out" width={16} />
          </Logout>
        </LinksContainer>
       
</HeaderContainer>
    </HeaderWrapper>
  );
}

