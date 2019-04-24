import React, {Component, Fragment} from "react";
import SearchPage from './components/SearchBar';
import NavbarPage from './components/Header';
import FooterPage from './components/FooterPage';
import {ServiceInfo} from "./components/ServiceInfo";

export class TutorPage extends Component {
    serviceAll =() =>{
        return(
            <Fragment>
                <NavbarPage />
                <SearchPage />
                <ServiceInfo category={"Tutors"}/>
                <FooterPage/>
            </Fragment>
        );
    };

    render() {
        return (
            this.serviceAll()
        );
    }
}
