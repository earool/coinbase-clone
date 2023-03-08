import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';

function HRoot() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-sidebarSmall lg:grid-cols-sidebar'>
      <Nav />
      <Outlet />
    </div>
  );
}

export default HRoot;
