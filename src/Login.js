import React, { Fragment, Component } from 'react';
import NavbarPage from './components/Header';
import LoginFormPage from './components/loginForm';
import FooterPage from './components/FooterPage';
import Redirect from "react-router-dom/es/Redirect";

export class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        };
        this.checkLog = this.checkLog.bind(this);
    }
    checkLog(check){
        this.setState({
            isLogged: check
        });
    }
    render() {
        if(this.state.isLogged)
        {
            return <Redirect to="/" />
        }else{
            return (
                <Fragment>
                    <NavbarPage />
                    <div className="container">
                        <LoginFormPage checkLog ={this.checkLog} />
                    </div>
                    <FooterPage/>
                </Fragment>
            );
        }

    }

}
