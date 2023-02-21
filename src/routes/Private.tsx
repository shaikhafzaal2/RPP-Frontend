import React from 'react';
import styled from 'styled-components';
import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';

import { spacer } from 'modules/theme';

import Github from 'containers/GitHub';
import { useAppSelector } from 'modules/hooks';
import { selectUser } from 'selectors';
// import { useMsal } from '@azure/msal-react';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from 'actions';

const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;
`;

function Private() {
  const userAccount = useAppSelector(selectUser);
console.log(userAccount.user.account.name)

  // const { instance } = useMsal();
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   instance.handleRedirectPromise().then((response) => { 

          
  //     response?.account==null?null: dispatch(loginSuccess(response.account));
  //   })
  // }, [])
  
  return (
    <Box key="Private" data-testid="Private">
      <Container ySpacing>
        <Header>
          <Heading>Oh hai! {userAccount.user.account.name}</Heading>
          <Paragraph>
            You can get this boilerplate{' '}
            <Link
              href="https://github.com/gilbarbara/react-redux-saga-boilerplate/"
              target="_blank"
            >
              here
            </Link>
          </Paragraph>
        </Header>
        <Box mb={4} textAlign="center">
          <Heading as="h5">Here's some GitHub data</Heading>
          <Text fontSize={1}>
            <i>*Just to have some requests in the sagas...</i>
          </Text>
        </Box>
        <Github />
      </Container>
    </Box>
  );
}

export default Private;
