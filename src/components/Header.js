import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, Button } from "mdbreact";

class NavbarPage extends Component {
    state = {
        isOpen: false,
        collapsed: false,
        clicked: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    toggleClicked = () => {
        console.log("in header "+ this.state.clicked);
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <MDBNavbar color="blue" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">LSH</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <button type="button" className="btn btn-link" onClick={this.props.loadHome}>Home</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <button type="button" className="btn btn-link" onClick={this.props.loadUploadService}>Place your services</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/servicelist" onClick={this.toggleClicked}>Services</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Download App</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem href="/webapp/login">Login</MDBDropdownItem>
                                    <MDBDropdownItem href="/webapp/signup">Sign up</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;