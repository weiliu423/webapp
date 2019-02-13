import React, { Fragment } from 'react';

import NavbarPage from './components/Header';
import ServiceCard from './components/ServiceCard';
//import Post from './components/Post';
import SearchPage from './components/SearchBar';
import FooterPage from './components/FooterPage';
const App = () => (
    <Fragment>

        <NavbarPage />
        <SearchPage />
        <div className="container">
            <ServiceCard/>
        </div>
        <FooterPage/>
    </Fragment>
);

export default App;