import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3D000B;
  padding: 20px;
  
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 30%;
  width: 30%;
  margin-right: 10px;
  @media (max-width: 768px) {
    height: auto;
    width: 180px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  margin-right: 10px;
`;

const SupportText = styled.p`
  
  color: #EB9D40;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContactItem = styled.p`
  font-size: 14px;
  color: #C73E27;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src="https://cdn.msruas.ac.in/ruas/imager/logos/identity/114150/university-site-logo_eb6a0f6b016d9a54184863465c76165f.png" alt="Logo" />
        <SocialIcons>
          <SocialIcon href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </SocialIcon>
          <SocialIcon href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
      </LogoContainer>
      <ContactDetails>
        <SupportText>Support/Help</SupportText>
        <ContactItem>Email: support@example.com</ContactItem>
        <ContactItem>Phone: +1-123-456-7890</ContactItem>
      </ContactDetails>
    </FooterContainer>
  );
};

export default Footer;
