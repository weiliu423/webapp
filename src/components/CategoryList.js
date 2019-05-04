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
            listOfName: [],
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
            output: <div><label className={"error"}>Please wait while loading service information, Thank you!</label>
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
                        let list = this.state.listOfName;
                        list = json.Data.split(',');

                        for(let i = 0; i < json.Data.length; i++)
                        {

                            alert(this.state.listOfName[i]);
                                this.setState({
                                    listName:this.state.listOfName[i]
                                });
                                view.push(this.categoryRows());
                                // json.Data[i].serviceInfo[x].ImageLink, json.Data[i].serviceInfo[x].Name, json.Data[i].serviceInfo[x].Description, json.Data[i].serviceInfo[x].CreateDate)
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
    categoryRows(){
        return(
            <div key={uuidv4()} className="list-group-item">
                <MDBListGroupItem data-toggle="modal" onClick={this.props.loadPage("Courses")}><a><p className="mb-0">
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
                       {/* <div className="list-group-item">
                            <MDBListGroupItem data-toggle="modal" onClick={this.props.loadCoursePage}><a><p className="mb-0">
                                <i className="fa fa-arrow-right fa-2x mr-4 red p-3 white-text rounded " aria-hidden="true"/>Courses</p></a></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem data-toggle="modal" onClick={this.props.loadTutor}><a><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 orange p-3 white-text rounded"
                                                                                                          aria-hidden="true"/>Tutors</p></a></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem data-toggle="modal" onClick={this.props.loadRepairs}><a><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 green p-3 white-text rounded"
                                                                                 aria-hidden="true"/>Repairs</p></a></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem><a><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 grey p-3 white-text rounded "
                                                                                 aria-hidden="true"/>Travel</p></a></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem><a><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 cyan p-3 white-text rounded"
                                                                                 aria-hidden="true"/>Wellness</p></a></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem><a><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 yellow p-3 white-text rounded"
                                                                                 aria-hidden="true"/>Electrician</p></a></MDBListGroupItem>
                        </div>*/}
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