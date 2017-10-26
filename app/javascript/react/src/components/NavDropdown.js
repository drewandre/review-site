import React from "react";

const NavDropdown = props => {
  let dropdown
  if (props.currentUser) {
    dropdown = (
      <div id="account-dropdown">
        <div className="user_info">
          <div href="https://google.com" className="dropdown-item">{props.currentUser.name}</div>
        </div>
        <div onClick={props.handleSignOut} className="dropdown-item">
          Sign out
        </div>
      </div>
    )
  } else {
    dropdown = (
      <div id="account-dropdown">
        <div onClick={props.handleSignIn} className="dropdown-item">
          Sign In
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
