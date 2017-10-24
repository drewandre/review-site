import React from 'react';

const NavDropdown = props => {

  return (
    <div className='nav-dropdown'>

      <div className='user_info'>
        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
        {/* <div>Drew André</div>
        <div>drew@gmail.com</div> */}
      </div>

      {/* <div onClick={props.handleSignInOut} className='sign-in-out'>
        Sign out (link)
      </div> */}

      {/* <div className='view-profile'>
        View profile (link)
      </div> */}

    </div>
  );
}

export default NavDropdown;
