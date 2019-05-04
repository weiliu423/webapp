import React, {Component, Fragment} from "react";
import {MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from "mdbreact";
import SpinnerPage from "./SpinnerPage";
const uuidv4 = require('uuid/v4');

export class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkName: '',
            previousName: '',
            output: [],
            checkService: false,
            result: '',
            show: false,
            listName: ''
        };
        this.onShow = this.onShow.bind(this);
        this.onHide = this.onHide.bind(this);
        this.loadingBar = this.loadingBar.bind(this);
        this.loadAllCategory();
    }
    loadingBar(){
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state= {
            output: <div className={"text-center"}><label className={"error"}>Please wait while loading service information, Thank you!</label>
                <br /><SpinnerPage /></div>
        };
        console.log(this.state.output);
    }
    onShow = ()=> {
        //this.onShowDetail();
        this.setState({ show: true });
    };
    onHide = ()=> {
        this.setState({ show: false })
    };
    error(){
        return(
            <div className="alert alert-danger text-center" role="alert">
                Error occurred
            </div>
        )
    }
    loadAllCategory(){
        this.loadingBar();
        fetch('https://serviceinfo.azurewebsites.net/getAllCategories', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json.Success === true) {
                        //console.log(json.Data);
                        this.state= {
                            output: []
                        };
                        let view = this.state.output;
                        const  test = [];
                       json.Data.map(function (name) {
                            test.push(name);
                            return name;
                        });
                       for(let i = 0; i < test.length; i++)
                        {
                                this.setState({
                                    listName:test[i]
                                });
                                view.push(this.categoryRows(test[i]));
                        }
                        setTimeout(function () {
                            this.setState({result: "Success"});
                        }.bind(this), 2000);
                        this.setState({
                            output: view
                        });
                        return true
                    } else {
                        setTimeout(function () {
                            this.onHide();
                            this.setState({result: "User doesn't exist or Invalid input"})
                        }.bind(this), 2000);
                        this.setState({output: this.error()});
                        return false
                    }
                });
            } else {
                this.setState({output: this.uploadServiceButton()});
                return false
            }
        }).catch(function (ex) {
            alert('Error occur: ' + ex);
        });
    };
    categoryRows(name){
        return(
            <div key={uuidv4()} className="list-group-item">
                <MDBListGroupItem data-toggle="modal" onClick={() => this.props.loadPage(name)}><a><p className="mb-0">
                    <i className="fa fa-arrow-right fa-2x mr-4 red p-3 white-text rounded " aria-hidden="true"/>{this.state.listName}</p></a></MDBListGroupItem>
            </div>
        )
    }
    CategoryList = () => {
     return (
        <Fragment>
            <MDBContainer>
                <MDBListGroup>
                    <div className="list-group-flush ml-10 mr-10">
                        {this.state.output}
                    </div>
                </MDBListGroup>
            </MDBContainer>

        </Fragment>
    );
};
    render() {
            return (
                this.CategoryList()
            );
    }
}