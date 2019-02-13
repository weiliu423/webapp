import React, { Fragment } from 'react';
import course from '../img/courses.png'
import tutor from '../img/tutor.png'
import repair from '../img/repair.png'
import travel from '../img/travel.png'
import wellness from '../img/wellness.png'
import electrician from '../img/electrician.png'


import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';


/*error message handly in future/*<UncontrolledAlert color="danger" className="d-none d-lg-block">
            <strong>Account not activated.</strong>
        </UncontrolledAlert>*/
const services = () => {
    return (
        <Fragment>
            <Card>
                <CardImg top width="100%" src={repair} alt="banner"/>
                <CardBody>
                    <CardTitle className="h6 mb-2s text-secondary">Course</CardTitle>
                    <div className="d-flex justify-content-center">
                        <Button color="success" size="sm" className="font-weight-light">View Service</Button>
                    </div>
                </CardBody>
            </Card>
        </Fragment>);
};

const ServiceCard = () => (
    <div >
    <div className="row">
        <div className="col-sm mt-2">
            <Fragment>
                <Card>
                    <CardImg top width="100%" height="200" src={course} alt="banner" />
                    <CardBody>
                        <CardTitle className="h4-responsive mb-2s text-secondary">Courses</CardTitle>
                        <div className="d-flex justify-content-center">
                            <Button color="success" size="sm" className="font-weight-light">View Services</Button>
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
                            <Button color="success" size="sm" className="font-weight-light">View Services</Button>
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
                            <Button color="success" size="sm" className="font-weight-light">View Services</Button>
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
                                <Button color="success" size="sm" className="font-weight-light">View Services</Button>
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
                                <Button color="success" size="sm" className="font-weight-light">View Services</Button>
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
                                <Button color="success" size="sm" className="font-weight-light">View Services</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Fragment>
            </div>
        </div>
    </div>
);

export default ServiceCard;