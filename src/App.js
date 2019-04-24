import React, { Fragment, Component } from 'react';

import NavbarPage from './components/Header';
import NavbarPageLog from './components/HeaderLogged';
import ServiceCard from './components/ServiceCard';
import SearchPage from './components/SearchBar';
import FooterPage from './components/FooterPage';
import Uploader from "./components/IUploader";
import {ServiceInfo} from "./components/ServiceInfo";
import SignFormPage from "./components/signUpForm";
import LoginFormPage from "./components/loginForm";
import {CategoryList} from "./components/CategoryList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            NavBarChange: "",
            default: true,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: false
        };
        this.checkLog = this.checkLog.bind(this);
        this.loadHeader = this.loadHeader.bind(this);
        this.loadHome = this.loadHome.bind(this);
        this.loadUploadService = this.loadUploadService.bind(this);
        this.loadTutor = this.loadTutor.bind(this);
        this.loadLogin = this.loadLogin.bind(this);
        this.loadSignUp = this.loadSignUp.bind(this);
        this.loadCoursePage = this.loadCoursePage.bind(this);
        this.loadCategoryListPage = this.loadCategoryListPage.bind(this);
    }
    componentDidMount() {
        this.loadHeader();
    }

    loadHome(){
        this.setState({
            default: false,
            Home: true,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: false
        });
    }
    loadUploadService(){
        this.setState({
            default: false,
            Home: false,
            UploadService: true,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: false
        });
    }
    loadTutor(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: true,
            Login: false,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: false
        });
    }
    loadLogin(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: true,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: false
        });
    }
    loadSignUp(){
        this.setState({
            default: false,
            Home: false,
            UploadService: true,
            Tutor: false,
            Login: false,
            SignUp: true,
            CoursePage: false,
            CategoryListPage: false
        });
    }
    loadCoursePage(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: true,
            CategoryListPage: false
        });
    }
    loadCategoryListPage(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            CategoryListPage: true
        });
    }

    checkLog(check){
        this.setState({
            isLogged: check
        });
    }
    loadHeader(){
        this.setState({
            NavBarChange: <NavbarPage
                loadHome={this.loadHome}
                loadUploadService={this.loadUploadService}
                loadTutor={this.loadTutor}
                loadLogin={this.loadLogin}
                loadSignUp={this.loadSignUp}
                loadCoursePage={this.loadCoursePage}
                loadCategoryListPage={this.loadCategoryListPage}/>
        });
    }
    Home = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <div className="container mb-10">
                <ServiceCard/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    UploadService = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <Uploader />
            </div>
            <FooterPage/>
        </Fragment>
    );
    Tutor = () => (
        <Fragment>
            <NavbarPage />
            <SearchPage />
            <ServiceInfo category={"Tutors"}/>
            <FooterPage/>
        </Fragment>
    );
    Login = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container">
                <LoginFormPage checkLog ={this.checkLog} />
            </div>
            <FooterPage/>
        </Fragment>
    );
    SignUp = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container">
                <SignFormPage />
            </div>
            <FooterPage/>
        </Fragment>
    );
    CoursePage = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Courses"}/>
            <FooterPage/>
        </Fragment>
    );
    CategoryListPage = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <CategoryList />
            </div>
            <FooterPage/>
        </Fragment>
    );
    render() {
        if(this.state.default)
        {
            return (
                this.Home()
            );
        } else if(this.state.Home)
        {
            return (
                this.Home()
            );
        }else if(this.state.UploadService === true)
        {
            return (
                this.UploadService()
            );
        }else if(this.state.Tutor)
        {
            return (
                this.Tutor()
            );
        }else if(this.state.Login)
        {
            return (
                this.Login()
            );
        }else if(this.state.SignUp)
        {
            return (
                this.SignUp()
            );
        }else if(this.state.CoursePage)
        {
            return (
                this.CoursePage()
            );
        }else if(this.state.CategoryListPage)
        {
            return (
                this.CategoryListPage()
            );
        }

    }
}

