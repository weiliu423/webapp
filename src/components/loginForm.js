import React from "react";
import SpinnerPage from "./SpinnerPage";

export default class LoginFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            loginshow: false
        };

        this.handlepasswordLoginChange = this.handlepasswordLoginChange.bind(this);
        this.handleusernameLoginChange = this.handleusernameLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            window.history.forward()
        }, 0);
        window.onunload= null;
    }
    onLoginShow = ()=> {
        this.setState({ loginshow: true })
    };
    onLoginHide = ()=> {
        this.setState({ loginshow: false })
    };
    loginloading(){
        if(this.state.loginshow){
            return <SpinnerPage />
        }
    }
    handlepasswordLoginChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleusernameLoginChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    handleLoginSubmit(event) {
        if(this.state.username !== ''|| this.state.password !== '' ) {
            this.onLoginShow();
            this.setState({result: "Validating, Please Wait. Thank You\n"});
            fetch('https://lshapi.azurewebsites.net/accountValidation', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserName: this.state.username,
                    Password: this.state.password
                })
            }).then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        if (json.Success === true) {
                            setTimeout(function () {
                                this.onLoginHide();
                                this.setState({result: "Success"});
                                this.setState({
                                    redirect: true
                                });
                            }.bind(this), 2000);
                            return true
                        } else {
                            setTimeout(function () {
                                this.onLoginHide();
                                this.setState({result: "User doesn't exist or Invalid input"})
                            }.bind(this), 2000);
                            return false
                        }
                    });
                }else{
                    setTimeout(function () {
                        this.onLoginHide();
                        this.setState({result: "User doesn't exist or Invalid input"})
                    }.bind(this), 2000);
                    return false
                }
            }).catch(function (ex) {
                alert('Error occurred: ' + ex);
            });
        }else {
            alert('Error occurred: No user input');
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="mt-10">
                <form className="text-center border border-light p-5 mt-10" onSubmit={this.handleLoginSubmit}>
                    <p className="h4 mb-4">Sign in</p>
                    <input type="text" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail/Username" value={this.state.username} onChange={this.handleusernameLoginChange}/>
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                           placeholder="Password" value={this.state.password} onChange={this.handlepasswordLoginChange}/>
                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="/">Forgot password?</a>
                        </div>
                    </div>
                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                    <p>Not a member?<a href="/webapp/signup">Register</a></p>
                    <label className={"error"}>{this.state.result}</label>
                    <br />
                    {this.loginloading()}
                    <hr/>
                </form>
            </div>
        );
    }
}

