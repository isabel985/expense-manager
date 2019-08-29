import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div>
      <NavLink to='/inbox'>Inbox</NavLink>
      <NavLink to='/expenses'>Expenses</NavLink>
      <NavLink to='/reports'>Reports</NavLink>
      <NavLink to='/settings'>Settings</NavLink>
    </div>
  );
};

export default SideNav;