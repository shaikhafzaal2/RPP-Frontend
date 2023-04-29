import { AdminHeader } from 'components/AdminHeader';
import React from 'react';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { PostedJobs } from './PostedJobs';
import { ViewStudents } from './ViewStudents';
import { PostJobs } from './PostJobs';
import styled from 'styled-components';

interface ParentProps {}
interface ParentState {
  childState: string;
}

const RenderContainer = styled.div`
  padding: 25px;
`;

export const Admin: React.FC<ParentProps> = () => {
  const [childState, setChildState] = useState<ParentState>({ childState: 'students' });

  const handleStateChange = (newState: string) => {
    setChildState({ childState: newState });
  };
  let componentToRender;

  // Compare the state with a string and render a component conditionally
  if (childState.childState === 'postedJob') {
    componentToRender = <PostedJobs />;
  } else if (childState.childState === 'students') {
    componentToRender = <ViewStudents />;
  } else if (childState.childState === 'postJobs') {
    componentToRender = <PostJobs />;
  }

  return (
    <div>
      <AdminHeader onStateChange={handleStateChange} />
      <RenderContainer>{componentToRender}</RenderContainer>
    </div>
  );
};
