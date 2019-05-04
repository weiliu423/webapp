import React, { Component } from 'react';
import request from 'superagent';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBListGroupItem} from "mdbreact";
import {StyledDropZone }  from 'react-drop-zone'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const CLOUDINARY_UPLOAD_PRESET = 'lshserviceupload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/predator423/image/upload/';
const uuidv4 = require('uuid/v4');


export default class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            show: true,
            result: '',
            titleService: '',
            description: '',
            email: '',
            phone: '',
            type: 'Choose a category',
            submitted: false,
            output: [],
            country: '', region: ''
        };
        this.handletitleChange = this.handletitleChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.handleUploadSubmit = this.handleUploadSubmit.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.onShow = this.onShow.bind(this);
        this.loadAllCategory();
    }
    selectCountry (val) {
        this.setState({ country: val });
    }
    selectRegion (val) {
        this.setState({ region: val });
    }
    onShow = ()=> {
        this.setState({ show: true })
    };
    onHide = ()=> {
        this.setState({ show: false })
    };
    onImageDrop(files) {
        var ext = files.name.substr(files.name.lastIndexOf('.') + 1);
        console.log(ext);
        if(ext === "png" ||ext === "jpg"||ext === "jpeg" ) {
            this.setState({
                uploadedFile: files
            });
            let reader = new FileReader();
            let file = this.state.uploadedFile;
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };
            reader.readAsDataURL(file);
            this.onHide();
            console.log(this.state.uploadedFile);
        }else {
            alert('Invalid file format for image');
        }
    }
    handletitleChange(event) {
        this.setState({
            titleService: event.target.value
        });
    }
    handledescriptionChange(event) {
        if(event.target.value.length < 500)
        {
            this.setState({
                description: event.target.value
            });
        }else{
            alert('Error occurred: Max character reached');
        }

    }
    loadAllCategory(){
        fetch('https://serviceinfo.azurewebsites.net/getAllCategories', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json.Success === true) {
                        this.state= {
                            output: []
                        };
                        let view = this.state.output;
                        const  test = [];
                        json.Data.map(function (name) {
                            test.push(name);
                            return name;
                        });
                        for(let i = 0; i < test.length; i++)
                        {
                            /*this.setState({
                                output:test[i]
                            });*/
                            view.push(this.categoryRows(test[i]));
                        }
                        this.setState({
                            output: view
                        });
                        return true
                    } else {
                        return false
                    }
                });
            } else {
                return false
            }
        }).catch(function (ex) {
            alert('Error occur: ' + ex);
        });
    };
    categoryRows(name){
        return(
            <MDBDropdownItem value={name} onClick={this.handleTypeChange}>{name}</MDBDropdownItem>
        )
    }
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
                console.log("Img_link: " + response.body.secure_url);
                console.log(
                    "Name:"+ this.state.titleService +
                    "\nTypeName:" + this.state.type +
                    "\nLinkAccountId:" + 1 +
                    "\nDescription:" + this.state.description +
                    "\nAccountName:" + this.props.username +
                    "\nImageLink: " + this.state.uploadedFileCloudinaryUrl +
                    "\nServiceLocation: " + this.state.region + ", " + this.state.country
                );
                this.setState({result: "Validating, Please Wait. Thank You\n"});
                fetch('https://serviceinfo.azurewebsites.net/createService', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Name: this.state.titleService,
                        TypeName: this.state.type,
                        LinkAccountId: 2,
                        Description: this.state.description,
                        ImageLink: this.state.uploadedFileCloudinaryUrl,
                        AccountName: this.props.username,
                        ServiceLocation: this.state.region + ", " + this.state.country
                    })
                }).then(response => {
                    if (response.ok) {
                        response.json().then(json => {
                            if (json.Success === true) {
                                setTimeout(function () {
                                    this.setState({result: "Success"});
                                    this.setState({
                                        uploadedFile: null,
                                        uploadedFileCloudinaryUrl: '',
                                        show: true,
                                        titleService: '',
                                        description: '',
                                        email: '',
                                        phone: '',
                                        type: '',
                                        country: '',
                                        region: ''
                                    });
                                }.bind(this), 2000);
                                return true
                            } else {
                                setTimeout(function () {
                                    this.setState({result: "Error occurred"})
                                }.bind(this), 2000);
                                return false
                            }
                        });
                    } else {
                        setTimeout(function () {
                            this.setState({result: "Error"})
                        }.bind(this), 2000);
                        return false
                    }
                }).catch(function (ex) {
                  //  alert('Error occurred: ' + ex);
                });
            }


        });
    }
    handleTypeChange(event) {
        this.setState({
            type: event.target.value
        });
    }
    afterUpload(){
        if(this.state.show)
        {
            return(
                <div>
                    <StyledDropZone onDrop={(file) => {this.onImageDrop(file)}}>
                        {
                            ({ over, overDocument }) =>
                                <div>
                                    {
                                        over ?
                                            'file is over element' :
                                            overDocument ?
                                                'Select or drop your file here, ideal size 400x400' :
                                                'Select or drop your file here, ideal size 400x400'
                                    }
                                </div>
                        }
                    </StyledDropZone>
                </div>
            )
        }else {

            return(
                <div>
                    {this.state.uploadedFile === '' ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.imagePreviewUrl}  height="200vw" width="200vw" alt={"uploaded"}/>
                            <button className="btn btn-info btn-block my-4" onClick={this.onShow}>Re-Upload Image</button>
                        </div>}
                </div>
            )
        }
    };
    handleUploadSubmit(event) {
        if(this.state.titleService !==  '' && this.state.description !==  ''
            && this.state.type !== 'Choose a category' && this.state.country !==  '' && this.state.region !==  '' ) {
            this.handleImageUpload(this.state.uploadedFile);
        }else {
            alert('Error occurred: Missing user input');
        }
        event.preventDefault();
    }
    render() {
        const { country, region } = this.state;
        return (
            <div className="mt-10 ml-10 mr-10 mb-10">
            <form className="text-center border border-light p-5 mt-10" onSubmit={this.handleUploadSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">{this.afterUpload()}</div>
                        <div className="col-md-6">
                            <p className="h4 mb-4">Service Details</p>
                            <input type="text" id="defaultAdsTitle" className="form-control mb-4" placeholder="TITLE" value={this.state.titleService} onChange={this.handletitleChange}/>
                            <MDBDropdown>
                                <MDBDropdownToggle className="btn btn-info btn-block my-4" caret color="primary">
                                    {this.state.type}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic>
                                    {this.state.output}
                                </MDBDropdownMenu>
                                <MDBDropdown>
                                    <CountryDropdown className={"dropdown-item"}
                                                     value={country}
                                                     onChange={(val) => this.selectCountry(val)} />
                                    <RegionDropdown className={"dropdown-item"}
                                                    country={country}
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)} />
                                </MDBDropdown>
                            </MDBDropdown>
                            <div className="md-form">
                                <label htmlFor="form7">DESCRIPTION :</label>
                                <br/>
                                <textarea id="form7" className="md-textarea form-control" rows="8" placeholder="MAX characters - 500" value={this.state.description} onChange={this.handledescriptionChange}/>
                            </div>
                            <br />
                        </div>
                    </div>
                    <button className="btn btn-info btn-block my-4" type="submit">Upload</button>
                    <label className={"error"}>{this.state.result}</label>
                </div>
            </form>
            </div>
        )
    }
}