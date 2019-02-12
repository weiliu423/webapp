import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn, MDBNavbarBrand, MDBNavbarToggler, MDBNavbar, MDBCollapse, MDBNavbarNav } from
        "mdbreact";

class SearchPage extends Component {
    state = {
        collapsed: false
    };


    handleNavbarClick = () => {
        this.setState({
            collapsed: false
        });
    };

    render() {
        return (
            <MDBCol class="col-md-10 col-md-offset-12">
                    <Router>
                            <MDBNavbarNav right onClick={this.handleNavbarClick}>
                                <MDBFormInline className="md-form mr-auto m-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    <MDBBtn outline color="blue" size="sm" type="submit" className="mr-auto">
                                        Search
                                    </MDBBtn>
                                </MDBFormInline>
                            </MDBNavbarNav>
                    </Router>
            </MDBCol>
        );
    }
}

export default SearchPage;