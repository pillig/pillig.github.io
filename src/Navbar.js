import React, { Component } from 'react';
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
  DropdownItem } from 'reactstrap';

export default class SiteNavbar extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar className="navbar-dark bg-dark" expand="md">
            <NavbarBrand href="/">Parker Illig</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav pills fill className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Projects
                  </DropdownToggle>
                  <DropdownMenu className='Projects' right>
                  <DropdownItem header>CSCI 3308 - Software Development & Tools</DropdownItem>
                    <DropdownItem href='https://github.com/pillig/CSCI3308Project'>Your Yelp</DropdownItem>
                    <DropdownItem header>CSCI 4830 - Big Data HCI</DropdownItem>
                    <DropdownItem href='https://github.com/pillig/book'>Book 1</DropdownItem>
                    <DropdownItem href='https://github.com/pillig/book2'>Book 2</DropdownItem>
                    <DropdownItem href='https://github.com/pillig/book3'>Book 3</DropdownItem>
                    <DropdownItem header>CSCI 4502 - Data Mining</DropdownItem>
                    <DropdownItem href='https://github.com/taylorjandrews/GitCu'>GitCU</DropdownItem>
                    <DropdownItem header>Personal</DropdownItem>
                    <DropdownItem href='https://github.com/pillig/back-bot'>Back-bot</DropdownItem> 
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        );
    }
}
