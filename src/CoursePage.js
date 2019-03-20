import React, {Component, Fragment} from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer
} from "mdbreact";
import SearchPage from './components/SearchBar';
import NavbarPage from './components/Header';
import FooterPage from './components/FooterPage';
import {ServiceInfo} from "./components/ServiceInfo";

export class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        };
    }
    servicePic = () =>{
        return(
            <MDBContainer className="d-flex justify-content-center">
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1 imgc-size">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100 img-size"
                                    src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100 img-size"
                                    src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100 img-size"
                                    src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    };
    serviceAll =() =>{
        return(
           <Fragment>
            <NavbarPage />
            <SearchPage />
            <ServiceInfo category={"Courses"}/>
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
