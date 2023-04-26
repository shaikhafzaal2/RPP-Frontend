import { AdminHeader } from 'components/AdminHeader';
import React from 'react';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { PostedJobs } from './PostedJobs';
import { ViewStudents } from './ViewStudents';
import { PostJobs } from './PostJobs';

interface ParentProps {}
interface ParentState {
  childState: string;
}

export const Admin: React.FC<ParentProps> = () => {
  const [childState, setChildState] = useState<ParentState>({ childState: 'students' });

  const handleStateChange = (newState: string) => {
    setChildState({ childState: newState }); // <-- keep the state name as "childState"
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
      {/* <p>Child state: {childState.childState}</p> */}

      {componentToRender}
      {/* <Routes>
        <Route element={<PostedJobs />} path="/postedjobs" />
      </Routes> */}
    </div>
  );
};
