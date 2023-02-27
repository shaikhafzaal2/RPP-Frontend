import React from 'react';
import { Box, Container, Flex } from 'styled-minimal';
import styled from 'styled-components'


const Image = styled.img`

  width: 40%;
  height: 50%;
  margin-bottom: 40px;
  
`;
const StyledDiv = styled.div`
  padding: 20px;
  margin-right: 20px;
`;
const Heading = styled.span`
 
  font-family: 'Noto Sans', sans-serif;
  font-weight:600;
  font-size: 30px;
  color: #EB9D40;
  text-align: center;
  
 
`;

function Footer() {
  return (
    <Box as="footer" borderTop="0.1rem solid #ddd" backgroundColor="#3D000B" height="50%">
      <Container py={3}>
        <Flex justifyContent="space-between">
          <div>
          <Image src="https://cdn.msruas.ac.in/ruas/imager/logos/identity/114150/university-site-logo_eb6a0f6b016d9a54184863465c76165f.png" alt="Image" />
          </div>
          
          <StyledDiv>
          <Heading>Support/Help</Heading>
          </StyledDiv>
          
          
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
