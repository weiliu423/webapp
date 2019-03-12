import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const signFormPage = () => {
    return (
        <div className="mt-10">
        <form className="text-center border border-light p-5">
            <p className="h4 mb-4">Sign up</p>
            <div className="form-row mb-4">
                <div className="col">
                    <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                    <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
                </div>
            </div>
            <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                    </small>
                    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
                        <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                            Optional - for two step authentication
                        </small>
                        <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>
                        <hr />
                            <p>By clicking <u><em>Sign up</em></u>  you agree to our <a href="" target="_blank">terms of service</a>
                            </p>
        </form>
        </div>
    );
};

export default signFormPage;