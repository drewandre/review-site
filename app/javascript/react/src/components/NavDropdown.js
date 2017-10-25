import React from 'react';

const NavDropdown = props => {

  return (
    <div className='nav-dropdown'>
<<<<<<< HEAD
      <div id='account-dropdown'>
        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
        <div className='user_info' >
          <div>Drew André</div>
          <div>drew@gmail.com</div>
        </div>
        <div onClick={props.handleSignInOut} className='sign-out'>
          Sign out (link)
        </div>
      </div>
=======
      <i className="fa fa-user fa-2x" id='user-info' aria-hidden="true"></i>
      <div id='sign-in-out'>Sign in</div>
>>>>>>> master
    </div>
  );
}

export default NavDropdown;
