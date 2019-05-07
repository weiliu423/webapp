import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown} from "mdbreact";

class NavbarPageLog extends Component {
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
                            <button type="button" className="btn btn-link navBtn" onClick={this.props.loadHome}>Home</button>
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
                            <p className="navBtn nameText">Hi {this.props.username} |</p>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a target="_blank" href="https://drive.google.com/file/d/1Kf55JYw-IU8CrF9KT_LCV181ElhGITtd/view?usp=sharing" className="btn btn-link navBtn">Download APP!</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <button type="button" className="btn btn-link navBtn" onClick={this.props.checkLogout}>Log out</button>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPageLog;