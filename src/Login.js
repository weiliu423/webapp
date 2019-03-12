import React, { Fragment, Component } from 'react';
import NavbarPage from './components/Header';
import LoginFormPage from './components/loginForm';
import FooterPage from './components/FooterPage';

export class Login  extends Component {
    render() {
        return (
            <Fragment>
                <NavbarPage />
                <div className="container">
                    <LoginFormPage />
                </div>
                <FooterPage/>
            </Fragment>
        );
    }

}
