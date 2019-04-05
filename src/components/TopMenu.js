import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopMenu extends React.Component {  
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <span>paul-grimes.com</span>
                </NavbarBrand>
                <Nav>
                    <NavItem className="nav-desc">Portfolio:</NavItem>
                    <NavLink className="nav-desc" href="#">Coming Soon</NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default TopMenu;