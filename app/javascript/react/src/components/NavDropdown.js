import React from 'react';

const NavDropdown = props => {

  return (
    <div className='nav-dropdown'>
      <i className="fa fa-user fa-2x" id='user-info' aria-hidden="true"></i>
      <div id='sign-in-out'>Sign in</div>
    </div>
  );
}

export default NavDropdown;
