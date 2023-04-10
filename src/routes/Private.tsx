import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';
import { Box } from 'styled-minimal/lib';

// import { spacer } from 'modules/theme';

// import Github from 'containers/GitHub';
// import { useAppSelector } from 'modules/hooks';
// import { selectUser } from 'selectors';

import CardComponent from 'components/CardComponent';
import { FilterComponent } from 'components/FilterComponent';

// import { useMsal } from '@azure/msal-react';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from 'actions';

// const Header = styled.div`
//   margin-bottom: ${spacer(3)};
//   text-align: center;
// `;
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getCompanyRequest } from 'actions';
import { useAppSelector } from 'modules/hooks';
import { selectCompany, selectFilter } from 'selectors';

const Container = styled.div`
  display: flex;
  padding-top: 1.3%;
`;

const LeftPane = styled.div`
  flex: 0.3;
  justify-content: center;
  align-items: flex-end;
  padding-left: 12%;
  padding-right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const RightPane = styled.div`
  flex: 0.7;
  padding-left: 5%;
  padding-right: 12%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function Dashboard() {
  // const userAccount = useAppSelector(selectUser);

  // const { instance } = useMsal();
  const currFilters = useAppSelector(selectFilter).filters;
  const companiesdata = useAppSelector(selectCompany).companies;
  console.log('this is companydata: ' + JSON.stringify(companiesdata));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyRequest(currFilters));
  }, [currFilters]);



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

      <Container>
        <LeftPane>
          <FilterComponent />
        </LeftPane>
        <RightPane>
          {companiesdata.map((e: any) => (
            <CardComponent key={e._id} company={e} />
          ))}
          {/* <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent /> */}
        </RightPane>
      </Container>
    </Box>
  );
}

export default Dashboard;
