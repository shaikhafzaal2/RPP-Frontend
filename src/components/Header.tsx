import React from 'react';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// import { Container, responsive } from 'styled-minimal';

// import { appColor, headerHeight, spacer } from 'modules/theme';

// import { logOut } from 'actions';
import Icon from 'components/Icon';

import profile from '../assets/icons/profile.png';
import { Container, responsive } from 'styled-minimal';
import { headerHeight, spacer } from 'modules/theme';
import Logo from 'components/Logo';
import { logoutSuccess } from 'actions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'modules/hooks';
import { selectUser } from 'selectors';
import { Link } from 'react-router-dom';

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
  border: 1px solid white;
  border-radius: 8.24176px;
  color: #c73e27;
  display: flex;
  font-size: 15px;
  padding: 10px;
  margin-left: 5px;

  ${responsive({ lg: { fontSize: '1.6rem' } })}; /* stylelint-disable-line */

  &.active {
    color: #000000;
  }
  &:hover {
    border: 1px solid #c73e27;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    color: #c73e27;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-right: 10px;
    @media (max-width: 768px) {
      display: none;
      /* margin-right: 2px; */
    }
  }
`;
const Offer = styled.a`
  text-decoration: none;
  color: #433270;
  padding: 30px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.42rem;
  @media (max-width: 768px) {
    display: none;
  }

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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Profile = styled.img`
  margin-right: 5px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  //
`;

export default function Header() {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logoutSuccess());
  };

  const userAccount = useAppSelector(selectUser);

  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>

        <LinksContainer>
          <Link to="/myoffers">
            <Offer>MY OFFERS</Offer>
          </Link>

          <UserName>{userAccount.user.name}</UserName>
          <Link to="/profile">
            <div style={{ flexDirection: 'row' }}>
              <ProfileIcon>
                <Profile src={profile} />
              </ProfileIcon>
            </div>
          </Link>

          <Logout onClick={handleClickLogout}>
            <span>Logout</span>
            <Icon name="sign-out" width={16} />
          </Logout>
        </LinksContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
