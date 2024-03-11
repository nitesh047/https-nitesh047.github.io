import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './Header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Navbar expand="md" className='headerComp'>
      <NavbarBrand className='navbarBrand' href="/">NITESH SAINI</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='LeftNavbarComp'>
  
        <NavbarText className='navbarList'>Home</NavbarText>
        <NavbarText  className='navbarList'>Proects</NavbarText>
        <NavbarText  className='navbarList'>Blog</NavbarText>
        <NavbarText>Resume</NavbarText>

      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header