import React, { Fragment, Component } from 'react';
import NavbarPage from './components/Header';
import {CategoryList} from './components/CategoryList';
import FooterPage from './components/FooterPage';

export class CategoryListPage  extends Component {
    render() {
        return (
            <Fragment>
                <NavbarPage />
                <div className="container mb-10">
                    <CategoryList />
                </div>
                <FooterPage/>
            </Fragment>
        );
    }

}
