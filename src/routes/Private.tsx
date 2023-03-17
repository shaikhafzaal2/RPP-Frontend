import React from 'react';
// import styled from 'styled-components';
// import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';
import { Box, Heading } from 'styled-minimal/lib';

// import { spacer } from 'modules/theme';

// import Github from 'containers/GitHub';
import { useAppSelector } from 'modules/hooks';
import { selectUser } from 'selectors';


import Footer from 'components/Footer';
import CardComponent from 'components/CardComponent';

// import { useMsal } from '@azure/msal-react';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from 'actions';

// const Header = styled.div`
//   margin-bottom: ${spacer(3)};
//   text-align: center;
// `;
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const LeftPane = styled.div`
  flex: 0.35;
  justify-content: center;
`;

const RightPane = styled.div`
  flex: 0.65;
  padding-left:10%;
  padding-right: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function Dashboard() {
  const userAccount = useAppSelector(selectUser);

  // const { instance } = useMsal();
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   instance.handleRedirectPromise().then((response) => { 

          
  //     response?.account==null?null: dispatch(loginSuccess(response.account));
  //   })
  // }, [])
  
  return (
    <Box key="Private" data-testid="Private">
      {/* <Container ySpacing>
        <Header>
          
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
      </Container> */}
      <Heading>Oh hai! {userAccount.user.account.name}</Heading>
       <Container>
      <LeftPane>
        <p>Left Side</p>
      </LeftPane>
      <RightPane>
        <CardComponent />
      </RightPane>
    </Container>
      <Footer />
    </Box>
  );
}

export default Dashboard;
