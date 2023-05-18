import React from 'react';
// import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import msrLogo from '../assets/logos/MsrLogoW.png';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    /* max-height: 100%; */
    width: auto;
  }
`;
const Image = styled.img`
  height: 30px;
  /* width: 45%; */
  margin-bottom: 8px;
`;

function Logo() {
  return (
    <Wrapper>
      <Image src={msrLogo} />
    </Wrapper>
  );
}

export default Logo;
