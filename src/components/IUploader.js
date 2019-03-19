import React, { Component } from 'react';
import request from 'superagent';
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

const CLOUDINARY_UPLOAD_PRESET = 'lshserviceupload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/predator423/image/upload/';

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
            submitted: false
        };
        this.handletitleChange = this.handletitleChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.handleUploadSubmit = this.handleUploadSubmit.bind(this);
        this.onShow = this.onShow.bind(this);
    }
    onShow = ()=> {
        this.setState({ show: true })
    };
    onHide = ()=> {
        this.setState({ show: false })
    };
    onSubmitted = ()=> {
        this.setState({ submitted: true })
    };
    onImageDrop(files) {

        this.setState({
            uploadedFile: files
        });
        this.handleImageUpload(files);
    }
    handletitleChange(event) {
        this.setState({
            titleService: event.target.value
        });
    }
    handledescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
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
                this.onHide();
            }
            console.log("Img_link: " + response.body.secure_url);

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
                                <div className='drop-zone'>
                                    {
                                        over ?
                                            'file is over element' :
                                            overDocument ?
                                                'Select or Drop your file here' :
                                                'no file'
                                    }
                                </div>
                        }
                    </StyledDropZone>
                </div>
            )
        }else {
            return(
                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl}  height="200vw" width="200vw" alt={"uploaded"}/>
                            <button className="btn btn-info btn-block my-4" onClick={this.onShow}>Re-Upload Image</button>
                        </div>}
                </div>
            )
        }
    };
    handleUploadSubmit(event) {
        this.onSubmitted();
        if(this.state.username !== ''|| this.state.password !== '' ) {
            this.onLoginShow();
            this.setState({result: "Validating, Please Wait. Thank You\n"});
            fetch('https://lshapi.azurewebsites.net/accountValidation', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserName: this.state.username,
                    Password: this.state.password
                })
            }).then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        if (json.Success === true) {
                            setTimeout(function () {
                                this.onLoginHide();
                                this.setState({result: "Success"});
                                this.setState({
                                    redirect: true
                                });
                            }.bind(this), 2000);
                            return true
                        } else {
                            setTimeout(function () {
                                this.onLoginHide();
                                this.setState({result: "User doesn't exist or Invalid input"})
                            }.bind(this), 2000);
                            return false
                        }
                    });
                }else{
                    setTimeout(function () {
                        this.onLoginHide();
                        this.setState({result: "User doesn't exist or Invalid input"})
                    }.bind(this), 2000);
                    return false
                }
            }).catch(function (ex) {
                alert('Error occurred: ' + ex);
            });
        }else {
            alert('Error occurred: No user input');
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="mt-10 ml-10 mr-10 mb-10">
            <form className="text-center border border-light p-5 mt-10" onSubmit={this.handleUploadSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">{this.afterUpload()}</div>
                        <div className="col-md-6">
                            <p className="h4 mb-4">Service Details</p>
                            <p className="h6 mb-4">Title</p>
                            <input type="text" id="defaultAdsTitle" className="form-control mb-4" placeholder="" value={this.state.titleService} onChange={this.handletitleChange}/>
                            <p className="h6 mb-4">Description</p>
                            <input type="text" id="defaultAdsServiceDes" className="form-control mb-10"
                                   placeholder="" value={this.state.description} onChange={this.handledescriptionChange}/>
                            <button className="btn btn-info btn-block my-4" type="submit">Upload</button>
                            <label className={"error"}>{this.state.result}</label>
                            <br />
                        </div>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}