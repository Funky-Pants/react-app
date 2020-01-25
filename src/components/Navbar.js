import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';    

const HeaderNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/users" activeClassName="active">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;