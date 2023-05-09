import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
  isAuthenticated: boolean;
  to?: string;
}

export default function PublicRoute(props: Props): JSX.Element {
  const { children, isAuthenticated, to = '/' } = props;
  // const { state } = useLocation();

  return isAuthenticated ? <Navigate to={ to} /> : children;
}
