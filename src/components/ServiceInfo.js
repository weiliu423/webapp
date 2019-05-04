import React, {Component} from "react";
import {
    MDBView, MDBMask, MDBCard, MDBCardBody, MDBRow, MDBCol
} from "mdbreact";
import SpinnerPage from "./SpinnerPage";
import ModalPage from "./Model";
const uuidv4 = require('uuid/v4');
const dateFormat = require('dateformat');

export class ServiceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            modal: false,
            result: '',
            ImageLink: '',
            title: '',
            description: '',
            createDate: '',
            ServiceLocation: '',
            output:[],
            contactName: 'default',
            contactEmail:'default',
            contactNo:'default',
            show: false,
            showContact: ''
        };
        this.onShow = this.onShow.bind(this);
        this.onHide = this.onHide.bind(this);
        this.loadAllService();
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
    loadAllService(){
        this.loadingBar();
        fetch('https://serviceinfo.azurewebsites.net/getServicesByName/'+this.props.category, {
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
                           for(let i = 0; i < json.Data.length; i++)
                           {
                               for(let x = 0; x < json.Data[i].serviceInfo.length; x++) {
                                   //console.log(json.Data[i].serviceInfo[x]);
                                   this.setState({
                                       contactName:json.Data[i].ContactName,
                                       contactEmail:json.Data[i].ContactEmail,
                                       contactNo:json.Data[i].ContactNo
                                   });
                                   this.setState({
                                       ImageLink: json.Data[i].serviceInfo[x].ImageLink,
                                       title: json.Data[i].serviceInfo[x].Name,
                                       description: json.Data[i].serviceInfo[x].Description,
                                       createDate: dateFormat(json.Data[i].serviceInfo[x].CreateDate, "yyyy-mm-dd"),
                                       ServiceLocation: json.Data[i].serviceInfo[x].ServiceLocation
                                   });
                                   view.push(this.serviceRows());
                                  // json.Data[i].serviceInfo[x].ImageLink, json.Data[i].serviceInfo[x].Name, json.Data[i].serviceInfo[x].Description, json.Data[i].serviceInfo[x].CreateDate)
                               }
                           }
                        setTimeout(function () {
                            this.onHide();
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
                            this.setState({output: ServiceInfo.error()});
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
    static error(){
        return(
            <div className="alert alert-danger text-center" role="alert">
                Error occurred
            </div>
        )
    }
    uploadServiceButton(){
         return(
             <div className="text-center">
                 No services submitted, be the first one !
                <button className="btn btn-info btn-block my-4" onClick={this.props.loadUploadService}>Place your services</button>
             </div>
         )
     }
     serviceRows(){
        return(
            <div key={uuidv4()}>
            <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                        <img
                            className="img-fluid"
                            src={this.state.ImageLink}
                            alt=""
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                        <strong>{this.state.title}</strong>
                    </h3>
                    <p className="dark-grey-text">
                        {this.state.description}
                    </p>
                    by <a href="#!" className="font-weight-bold">{this.state.contactName}</a>,  {this.state.createDate}, <i
                    className="fas fa-map-marker-alt"> {this.state.ServiceLocation}</i>
                        <ModalPage contactEmail={this.state.contactEmail} phoneNo={this.state.contactNo}/>
                </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            </div>
        )
    }
    serviceAll =() =>{
        return(
            <div>
                <div className="container mb-10">
                    <MDBCard className="my-5 px-5 pb-5">
                        <MDBCardBody className="text-center">
                            {this.state.output}
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        );
    };

    render() {
        return (
            this.serviceAll()
        );
    }
}
