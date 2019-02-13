import React, { Fragment } from 'react';

import NavbarPage from './components/Header';
import ServiceCard from './components/ServiceCard';
//import Post from './components/Post';
import SearchPage from './components/SearchBar';
const App = () => (
    <Fragment>

        <NavbarPage />
        <SearchPage />
        <div className="container">
            <ServiceCard/>
        </div>


    </Fragment>
);

export default App;