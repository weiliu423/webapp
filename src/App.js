import React, { Fragment, Component } from 'react';

import NavbarPage from './components/Header';
import ServiceCard from './components/ServiceCard';
import SearchPage from './components/SearchBar';
import FooterPage from './components/FooterPage';

export default class App extends Component {
    App = () => (
        <Fragment>
            <NavbarPage />
            <SearchPage />
            <div className="container mb-10">
                <ServiceCard/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    render() {
        return (
            this.App()
        );
    }
}

