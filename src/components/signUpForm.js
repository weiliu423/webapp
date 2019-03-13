import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import SpinnerPage from './SpinnerPage';

export default class signFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            sName: '',
            email: '',
            password: '',
            username: '',
            show: false
        };

        this.handlefNameChange = this.handlefNameChange.bind(this);
        this.handlesNameChange = this.handlesNameChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
        this.handleusernameChange = this.handleusernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            window.history.forward()
        }, 0);
        window.onunload= null;
    }
    onShow = ()=> {
        this.setState({ show: true })
    };
    onHide = ()=> {
        this.setState({ show: false })
    };
    loading(){
        if(this.state.show){
            return <SpinnerPage />
        }else {

        }
    }

    handlefNameChange(event) {
        this.setState({
            fName: event.target.value
        });
    }
    handlesNameChange(event) {
        this.setState({
            sName: event.target.value
        });
    }
    handleemailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    handlepasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleusernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    handleSubmit(event) {
        if(this.state.username !== ''|| this.state.password !== '' || this.state.fName !== '' || this.state.sName !== '' || this.state.email !== '') {
            this.onShow();
            this.setState({result: "Validating, Please Wait. Thank You\n"});
            fetch('https://lshapi.azurewebsites.net/createNewAccount', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserName: this.state.username,
                    Password: this.state.password,
                    FirstName: this.state.fName,
                    LastName: this.state.sName,
                    Email: this.state.email
                })
            }).then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        if (json.Success === true) {
                            setTimeout(function () {
                                this.onHide();
                                this.setState({result: "Success"});
                                this.setState({
                                    redirect: true
                                });
                            }.bind(this), 2000);
                            return true
                        } else {
                            setTimeout(function () {
                                this.onHide();
                                this.setState({result: "User exists or Invalid input"})
                            }.bind(this), 2000);
                            return false
                        }
                    });
                }else{
                    setTimeout(function () {
                        this.onHide();
                        this.setState({result: "User exists or Invalid input"})
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
            <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
            <p className="h4 mb-4">Sign up</p>
        <div className="form-row mb-4">
            <div className="col">
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" value={this.state.fName} onChange={this.handlefNameChange}/>
            </div>
            <div className="col">
                <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" value={this.state.sName} onChange={this.handlesNameChange}/>
            </div>
        </div>
        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" value={this.state.email} onChange={this.handleemailChange}/>
                <input type="username" id="defaultRegisterFormUsername" className="form-control mb-4" placeholder="Username" value={this.state.username} onChange={this.handleusernameChange}/>
        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password"
               aria-describedby="defaultRegisterFormPasswordHelpBlock" value={this.state.password} onChange={this.handlepasswordChange}/>
        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
            At least 8 characters and 1 digit
        </small>
        <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
                <label className={"error"}>{this.state.result}</label>
                <br />
                {this.loading()}
        <hr/>
        <p>By clicking <u><em>Sign up</em></u> you agree to our <a href="" target="_blank">terms of service</a>
    </p>
    </form>
    </div>
        );
    }
}