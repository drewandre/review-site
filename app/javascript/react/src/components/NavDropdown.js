import React from "react";

const NavDropdown = props => {
  let dropdown
  if (props.currentUser) {
    dropdown = (
      <div id="account-dropdown">

      <a href={`/${props.currentUser.login}`}>
        <div className="dropdown-item">
          <img src={`${props.currentUser.avatar_url}`} alt={`${props.currentUser.name} profile photo`} className='profile-icon' />
          <div className='user-info'>
              {props.currentUser.name}
            <div id='user-handle'>
              {props.currentUser.login}
            </div>
          </div>
        </div>
      </a>


        <div onClick={props.handleSignOut} className="dropdown-item">
          <div id='sign-in-out'>Sign out</div>
        </div>
      </div>
    )
  } else {
    dropdown = (
      <div id="account-dropdown">
        <div onClick={props.handleSignIn} className="dropdown-item">
          <div id='sign-in-out'>Sign in</div>
        </div>
      </div>
    )
  }

  return (
    <div className="nav-dropdown">
      {dropdown}
    </div>
  )
}
//<i className="fa fa-user fa-2x" aria-hidden="true"></i>

export default NavDropdown;
