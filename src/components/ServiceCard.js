import React, {Component, Fragment} from 'react';
import course from '../img/courses.png'
import tutor from '../img/tutor.png'
import repair from '../img/repair.png'
import travel from '../img/travel.png'
import wellness from '../img/wellness.png'
import electrician from '../img/electrician.png'


import {
    Button, Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';
import {MDBListGroupItem} from "mdbreact";


export default class ServiceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        return (
            <div >
            <div className="row">
                <div className="col-sm mt-2">
                    <Fragment>
                        <Card>
                            <CardImg top width="100%" height="200" src={course} alt="banner" />
                            <CardBody>
                                <CardTitle className="h4-responsive mb-2s text-secondary">Courses</CardTitle>
                                <div className="d-flex justify-content-center">
                                    <Button data-toggle="modal" onClick={()=>this.props.loadPage("Courses")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Fragment>
                </div>
                <div className="col-sm mt-2">
                    <Fragment>
                        <Card>
                            <CardImg top width="100%" height="200" src={tutor} alt="banner" />
                            <CardBody>
                                <CardTitle className="h4-responsive mb-2s text-secondary">Tutors</CardTitle>
                                <div className="d-flex justify-content-center">
                                    <Button data-toggle="modal" onClick={()=>this.props.loadPage("Tutors")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Fragment>
                </div>
                <div className="col-sm mt-2">
                    <Fragment>
                        <Card>
                            <CardImg top width="100%" height="200" src={repair} alt="banner" />
                            <CardBody>
                                <CardTitle className="h4-responsive mb-2s text-secondary">Repairs</CardTitle>
                                <div className="d-flex justify-content-center">
                                    <Button data-toggle="modal" onClick={()=>this.props.loadPage("Repairs")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Fragment>
                </div>
            </div>
                <div className="row mt-3">
                    <div className="col-sm mt-2">
                        <Fragment>
                            <Card>
                                <CardImg top width="100%" height="200" src={travel} alt="banner" />
                                <CardBody>
                                    <CardTitle className="h4-responsive mb-2s text-secondary">Travel</CardTitle>
                                    <div className="d-flex justify-content-center">
                                        <Button data-toggle="modal" onClick={()=>this.props.loadPage("Travel")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Fragment>
                    </div>
                    <div className="col-sm mt-2">
                        <Fragment>
                            <Card>
                                <CardImg top width="100%" height="200" src={wellness} alt="banner" />
                                <CardBody>
                                    <CardTitle className="h4-responsive mb-2s text-secondary">Wellness</CardTitle>
                                    <div className="d-flex justify-content-center">
                                        <Button data-toggle="modal" onClick={()=>this.props.loadPage("Wellness")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Fragment>
                    </div>
                    <div className="col-sm mt-2">
                        <Fragment>
                            <Card>
                                <CardImg top width="100%" height="200" src={electrician} alt="banner" />
                                <CardBody>
                                    <CardTitle className="h4-responsive mb-2s text-secondary">Electrician</CardTitle>
                                    <div className="d-flex justify-content-center">
                                        <Button data-toggle="modal" onClick={()=>this.props.loadPage("Electrician")} color="success" size="sm" className="font-weight-light">View Services</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Fragment>
                    </div>
                </div>
            </div>
        );
    }
}