import React, {Component} from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn
} from "mdbreact";


export class ServiceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            result: '',
            ImageLink: '',
            title: '',
            description: '',
            createDate: '',
            output:[]
        };
        this.loadAllService();
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
    loadAllService(){
        fetch('https://serviceinfo.azurewebsites.net/getServicesByName/'+this.props.category, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json.Success === true) {
                           console.log(json.Data);
                           let view = this.state.output;
                           for(let i = 0; i < json.Data.length; i++)
                           {
                               for(let x = 0; x < json.Data[i].serviceInfo.length; x++) {
                                   console.log(json.Data[i].serviceInfo[x]);
                                   this.setState({
                                       ImageLink: json.Data[i].serviceInfo[x].ImageLink,
                                       title: json.Data[i].serviceInfo[x].Name,
                                       description: json.Data[i].serviceInfo[x].Description,
                                       createDate: json.Data[i].serviceInfo[x].CreateDate
                                   })
                                   view.push(this.serviceRows());
                                  // json.Data[i].serviceInfo[x].ImageLink, json.Data[i].serviceInfo[x].Name, json.Data[i].serviceInfo[x].Description, json.Data[i].serviceInfo[x].CreateDate)
                               }
                           }
                        this.setState({
                            output: view
                        });
                        return true
                    } else {
                            this.setState({result: "Error occurred"});
                        return false
                    }
                });
            } else {
                    this.setState({result: "Error"});
                return false
            }
        }).catch(function (ex) {
            alert('Error occurred: ' + ex);
        });
    };
     serviceRows(){
        return(
            <div>
            <MDBRow>
                <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                        <img
                            className="img-fluid"
                            src={this.state.ImageLink}
                            alt=""
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                        <strong>{this.state.title}</strong>
                    </h3>
                    <p className="dark-grey-text">
                        {this.state.description}
                    </p>
                    <p>
                        by <a href="#!" className="font-weight-bold">Cork Institute of Technology</a>, {this.state.createDate}
                    </p>
                    <MDBBtn color="primary" size="md">
                        Contact us
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            </div>
        )
    }
    serviceAll =() =>{
        return(
            <div>
                <div className="container mb-10">
                    <MDBCard className="my-5 px-5 pb-5">
                        <MDBCardBody>
                            {this.state.output}
                           {/* <MDBRow>
                                <MDBCol lg="5" xl="4">
                                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                        <img
                                            className="img-fluid"
                                            src="https://res.cloudinary.com/predator423/image/upload/v1553097421/AI-20171012113039221_i6o5ao.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7" xl="8">
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>Machine learning (AI) in CIT</strong>
                                    </h3>
                                    <p className="dark-grey-text">
                                        Artificial intelligence (AI) is a field of computer science that enables computers and
                                        machines to perform tasks normally requiring human intelligence.
                                        Its many applications range from chess-playing robots and autonomous
                                        cars to speech, image, and language processing, robotic manufacturing,
                                        and surveillance systems.
                                    </p>
                                    <p>
                                        by <a href="#!" className="font-weight-bold">Cork Institute of Technology</a>, 19/04/2018
                                    </p>
                                    <MDBBtn color="primary" size="md">
                                        Contact us
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                            <hr className="my-5" />
                            <MDBRow>
                                <MDBCol lg="5" xl="4">
                                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                        <img
                                            className="img-fluid"
                                            src="https://www.edx.org/sites/default/files/course/image/promoted/organizational-behaviour-illustration_378x225.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7" xl="8">
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>Accounting</strong>
                                    </h3>
                                    <p className="dark-grey-text">
                                        This is a specialised accounting course designed for students who intend entering the accounting profession. This four year Honours Degree programme offers an advanced specialist education in accounting as a firm base for either further academic study, a career in business or the pursuit of a professional qualification with one of the accountancy bodies.
                                    </p>
                                    <p>
                                        by <a href="#!" className="font-weight-bold">Cork Institute of Technology</a>, 19/04/2018
                                    </p>
                                    <MDBBtn color="primary" size="md">
                                        Contact us
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                            <hr className="my-5" />
                            <MDBRow>
                                <MDBCol lg="5" xl="4">
                                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                        <img
                                            className="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol lg="7" xl="8">
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>Data Science & Analytics</strong>
                                    </h3>
                                    <p className="dark-grey-text">
                                        The need for both data scientists and “data savvy” practitioners has been well-articulated in government policy documents, going back at least as far as the Action Plan for Jobs in 2012. Following on its very successful Higher Diploma Science in Data Science & Analytics, CIT now offers a conversion MSc programme in this area. This full-time MSc programme has been designed in collaboration with industry experts to address pressing skills shortage in the field of Data Science and Analytics.
                                    </p>
                                    <p>
                                        by <a href="#!" className="font-weight-bold">Cork Institute of Technology</a>, 19/04/2018
                                    </p>
                                    <MDBBtn color="primary" size="md">
                                        Contact us
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>*/}
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        );
    };

    render() {
        return (
            this.serviceAll()
        );
    }
}
