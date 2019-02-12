import React, { Fragment } from 'react';

import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const SideCard = () => (
    <Fragment>

        {/*error message handly in future/*<UncontrolledAlert color="danger" className="d-none d-lg-block">
            <strong>Account not activated.</strong>
        </UncontrolledAlert>*/}
        <Card>
            <CardImg top width="100%" src={BANNER} alt="banner" />
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Glad Chinda</CardTitle>
                <Button color="success" className="font-weight-bold">View Profile</Button>
            </CardBody>
        </Card>

    </Fragment>
);

export default SideCard;