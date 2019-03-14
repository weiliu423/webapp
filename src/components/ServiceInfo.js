import React, {Component, Fragment} from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon, MDBBtn
} from "mdbreact";
import SearchPage from './SearchBar';


export class ServiceInfo extends Component {
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
            <div>
                <SearchPage />
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="fas fa-book-open" className="pr-2" />
                                    Computer Science
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Machine learning (AI) in CIT</strong>
                            </h3>
                            <p>
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                nihil impedit quo minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor repellendus et aut
                                officiis debitis.
                            </p>
                            <p>
                                by
                                <a href="#!">
                                    <strong>Carine Fox</strong>
                                </a>
                                , 19/08/2018
                            </p>
                            <MDBBtn color="success" size="md" className="waves-light ">
                                Read more
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <MDBCol lg="7">
                            <a href="#!" className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="image" className="pr-2" />
                                    Lifestyle
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Title of the news</strong>
                            </h3>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate
                                non provident.
                            </p>
                            <p>
                                by
                                <a href="#!">
                                    <strong>Carine Fox</strong>
                                </a>
                                , 14/08/2018
                            </p>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-4 waves-light"
                            >
                                Read more
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="indigo-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="suitcase" className="pr-2" />
                                    Food
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Title of the news</strong>
                            </h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                sit amet.
                            </p>
                            <p>
                                by
                                <a href="#!">
                                    <strong>Carine Fox</strong>
                                </a>
                                , 11/08/2018
                            </p>
                            <MDBBtn color="indigo" size="md" className="waves-light ">
                                Read more
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            </div>
        );
    };

    render() {
        return (
            this.serviceAll()
        );
    }
}
