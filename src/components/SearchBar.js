import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchPage = () => {
    return (
        <div className="d-flex justify-content-center">
        <MDBCol md="2.5">
            <MDBFormInline className="md-form">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                    Search
                </MDBBtn>
            </MDBFormInline>
        </MDBCol>
        </div>
    );
};

export default SearchPage;