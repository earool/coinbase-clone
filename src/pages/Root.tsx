import { Outlet } from 'react-router-dom';

import StartingHeader from '../components/StartingHeader';

function RootStartingLayout() {
  return (
    <>
      <StartingHeader />
      <Outlet />
    </>
  );
}

export default RootStartingLayout;
