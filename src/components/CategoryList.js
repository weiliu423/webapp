import React, {Component, Fragment} from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

export class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkName: '',
            previousName: '',
            checkService: false
        };
    }
     CategoryList = () => {
     return (
        <Fragment>
            <MDBContainer>
                <MDBListGroup>
                    <div className="list-group-flush ml-10 mr-10">
                        <div className="list-group-item">
                            <MDBListGroupItem href="/webapp/servicelist/courses"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 red p-3 white-text rounded " aria-hidden="true"/>Courses</p></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem href="#"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 orange p-3 white-text rounded"
                                                                              aria-hidden="true"/>Tutors</p></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem href="#"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 green p-3 white-text rounded"
                                                                              aria-hidden="true"/>Repairs</p></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem href="#"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 grey p-3 white-text rounded "
                                                                              aria-hidden="true"/>Travel</p></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem href="#"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 cyan p-3 white-text rounded"
                                                                              aria-hidden="true"/>Wellness</p></MDBListGroupItem>
                        </div>
                        <div className="list-group-item">
                            <MDBListGroupItem href="#"><p className="mb-0"><i className="fa fa-arrow-right fa-2x mr-4 mr-4 yellow p-3 white-text rounded"
                                                                              aria-hidden="true"/>Electrician</p></MDBListGroupItem>
                        </div>
                    </div>
                </MDBListGroup>
            </MDBContainer>

        </Fragment>
    );
};

    render() {
            return (
                this.CategoryList()
            );

    }
}