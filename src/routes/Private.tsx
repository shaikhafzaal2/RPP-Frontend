import React, { useEffect } from 'react';
import { Box } from 'styled-minimal/lib';
import CardComponent from 'components/CardComponent';
import { FilterComponent } from 'components/FilterComponent';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getCompanyRequest, getProfileRequest } from 'actions';
import { useAppSelector } from 'modules/hooks';
import { selectCompany, selectFilter, selectUser } from 'selectors';

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
  const userAccount = useAppSelector(selectUser).user;
  const currFilters = useAppSelector(selectFilter).filters;
  const companiesdata = useAppSelector(selectCompany).companies;
  console.log('this is companydata: ' + JSON.stringify(companiesdata));
  const dispatch = useDispatch();



  useEffect(() => {  
    dispatch(getCompanyRequest(currFilters));
    dispatch(getProfileRequest(userAccount.homeAccountId));
  }, [currFilters]);



  return (
    <Box key="Private" data-testid="Private">
     

      <Container>
        <LeftPane>
          <FilterComponent />
        </LeftPane>
        <RightPane>
          {companiesdata.map((e: any) => (
            <CardComponent key={e._id} company={e} />
          ))}
         
        </RightPane>
      </Container>
    </Box>
  );
}

export default Dashboard;
