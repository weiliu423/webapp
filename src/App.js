import React, { Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import NavbarPage from './components/Header';
import SideCard from './components/SideCard';
import Post from './components/Post';
import SearchPage from './components/SearchBar';
const App = () => (
    <Fragment>

        <NavbarPage />
        <SearchPage />
        <main className="my-1 py-1">
            <Container className="px-1">
                <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                    <Col xs={{ order: 1 }} md={{ size: 2, order: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <SideCard />
                    </Col>

                    <Col xs={{ order: 2 }} md={{ size: 2, offset: 2 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <SideCard />
                    </Col>

                    <Col xs={{ order: 3 }} md={{ size: 2, offset: 2 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <SideCard />
                    </Col>

                    <Col xs={{ order: 4 }} md={{ size: 2, offset: 2 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                        <SideCard />
                    </Col>

                </Row>
            </Container>
        </main>

    </Fragment>
);

export default App;