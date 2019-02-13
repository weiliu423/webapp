import React, { Fragment } from 'react';

import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';
/*error message handly in future/*<UncontrolledAlert color="danger" className="d-none d-lg-block">
            <strong>Account not activated.</strong>
        </UncontrolledAlert>*/
const services = () => {


    return (
        <Fragment>
            <Card>
                <CardImg top width="100%" src={BANNER} alt="banner"/>
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
    <div className="row">
        <div className="col-sm">
            <Fragment>
                <Card>
                    <CardImg top width="100%" src={BANNER} alt="banner" />
                    <CardBody>
                        <CardTitle className="h6 mb-2s text-secondary">Course</CardTitle>
                        <div className="d-flex justify-content-center">
                            <Button color="success" size="sm" className="font-weight-light">View Service</Button>
                        </div>
                    </CardBody>
                </Card>
            </Fragment>
        </div>
        <div className="col-sm">
            <Fragment>
                <Card>
                    <CardImg top width="100%" src={BANNER} alt="banner" />
                    <CardBody>
                        <CardTitle className="h6 mb-2s text-secondary">Course</CardTitle>
                        <div className="d-flex justify-content-center">
                            <Button color="success" size="sm" className="font-weight-light">View Service</Button>
                        </div>
                    </CardBody>
                </Card>
            </Fragment>
        </div>
        <div className="col-sm">
            <Fragment>
                <Card>
                    <CardImg top width="100%" src={BANNER} alt="banner" />
                    <CardBody>
                        <CardTitle className="h6 mb-2s text-secondary">Course</CardTitle>
                        <div className="d-flex justify-content-center">
                            <Button color="success" size="sm" className="font-weight-light">View Service</Button>
                        </div>
                    </CardBody>
                </Card>
            </Fragment>
        </div>
    </div>
);

export default ServiceCard;