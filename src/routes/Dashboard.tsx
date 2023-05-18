import React, { useEffect, useState } from 'react';
// import { Box } from 'styled-minimal/lib';
import CardComponent from 'components/CardComponent';
import { FilterComponent } from 'components/FilterComponent';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getCompanyRequest, getProfileRequest } from 'actions';
import { useAppSelector } from 'modules/hooks';
import { selectCompany, selectFilter, selectUser } from 'selectors';
import filter from '../assets/icons/setting.png';

const Container = styled.div`
  display: flex;
  padding-top: 1.3%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  background: none;
  border: none;
  cursor: pointer;
`;

const HamburgerIcon = styled.img`
  height: 20px;
  color: black;
  padding: 0%;
  margin: 0%;
`;
interface FilterContentProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}
const FilterContent = styled.div<FilterContentProps>`
  @media (min-width: 768px) {
    display: block;
  }

  ${({ collapsed }) => collapsed && 'display:none'}
`;

const Dashboard = () => {
  const userAccount = useAppSelector(selectUser).user;
  const currFilters = useAppSelector(selectFilter).filters;
  const companiesdata = useAppSelector(selectCompany).companies;
  console.log('this is companydata: ' + JSON.stringify(companiesdata));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyRequest(currFilters));
    dispatch(getProfileRequest(userAccount.homeAccountId));
  }, [currFilters]);

  const [filterCollapsed, setFilterCollapsed] = useState(true);

  const handleToggleFilter = () => {
    setFilterCollapsed(!filterCollapsed);
  };
  return (
    // <Box key="Private" data-testid="Private">
    <Container>
      <LeftPane>
        <HamburgerButton onClick={handleToggleFilter}>
          <HamburgerIcon src={filter} />
        </HamburgerButton>
        <FilterContent collapsed={filterCollapsed}>
          <FilterComponent />
        </FilterContent>
      </LeftPane>
      <RightPane>
        {companiesdata.map((e: any) => (
          <CardComponent key={e._id} company={e} />
        ))}
      </RightPane>
    </Container>
    // </Box>
  );
};

export default Dashboard;
