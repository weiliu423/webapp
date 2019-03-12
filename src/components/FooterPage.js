import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4 fixed-bottom">
            <div className="text-center py-1">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://weiliu423.github.io"> Wei Liu </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default FooterPage;