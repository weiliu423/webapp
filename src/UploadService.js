import React, { Fragment, Component } from 'react';
import NavbarPage from './components/Header';
import Uploader from './components/IUploader';
import FooterPage from './components/FooterPage';

export class UploadService  extends Component {
    render() {
        return (
            <Fragment>
                <NavbarPage />
                <div className="container mb-10">
                    <Uploader />
                </div>
                <FooterPage/>
            </Fragment>
        );
    }

}
