import React from 'react';
import Nav from './nav';

const Layout = ({ children }: any) => {
  return <div>
    <Nav />
    <div>
      {children}
    </div>
    </div>;
};
export default Layout;