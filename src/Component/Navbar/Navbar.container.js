import React, { PureComponent } from 'react';
import NavbarComponent  from './Navbar.component';

 class NavbarContainer extends PureComponent {
  render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    )
  }
}

export default NavbarContainer;