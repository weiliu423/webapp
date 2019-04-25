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
                            <button type="button" className="btn btn-link navBtn " onClick={this.props.loadHome}>Home</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <button type="button" className="btn btn-link navBtn" onClick={this.props.loadUploadService}>Place your services</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <button type="button" className="btn btn-link navBtn" onClick={this.props.loadCategoryListPage}>Services</button>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <button type="button" className="btn btn-link navBtn" onClick={this.props.loadLogin}>Download APP!</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                    <button type="button" className="btn btn-link navBtn" onClick={this.props.loadLogin}>Login</button>
                                     |
                                    <button type="button" className="btn btn-link navBtn" onClick={this.props.loadSignUp}>Sign up</button>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;