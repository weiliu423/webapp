import React, { Fragment, Component } from 'react';
import NavbarPage from './components/Header';
import SignFormPage from './components/signUpForm';
import FooterPage from './components/FooterPage';

export class SignUp extends Component {
    render() {
        return (
            <Fragment>
                <NavbarPage />
                <div className="container">
                    <SignFormPage />
                </div>
                <FooterPage/>
            </Fragment>
        );
    }

}
