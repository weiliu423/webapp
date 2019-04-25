import React, { Fragment, Component } from 'react';
import { Button } from "mdbreact";
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
            Repairs: false,
            CategoryListPage: false,
            username:""
        };
        this.checkLogout =  this.checkLogout.bind(this);
        this.checkLog = this.checkLog.bind(this);
        this.loadHeader = this.loadHeader.bind(this);
        this.loadHome = this.loadHome.bind(this);
        this.loadUploadService = this.loadUploadService.bind(this);
        this.loadTutor = this.loadTutor.bind(this);
        this.loadLogin = this.loadLogin.bind(this);
        this.loadSignUp = this.loadSignUp.bind(this);
        this.loadCoursePage = this.loadCoursePage.bind(this);
        this.loadCategoryListPage = this.loadCategoryListPage.bind(this);
        this.loadRepairsPage  = this.loadRepairsPage.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    componentWillMount() {
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
            Repairs: false,
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
            Repairs: false,
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
            Repairs: false,
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
            Repairs: false,
            CategoryListPage: false
        });
    }
    loadSignUp(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: true,
            CoursePage: false,
            Repairs: false,
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
            Repairs: false,
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
            Repairs: false,
            CategoryListPage: true
        });
    }
    loadRepairsPage(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            Repairs: true,
            CategoryListPage: false
        });
    }
    setUsername(name){
        this.setState({
            username: name
        });
    }
    checkLogout(){
        console.log(" log out: "+this.state.isLogged );
        this.setState({
            isLogged: false
        });
        console.log(" log out: "+this.state.isLogged );
        if(this.state.isLogged === false) {
            console.log("loaded log out + false");
            this.loadHeader();
            this.loadHome();
        }
    }
    checkLog(){
        if(this.state.isLogged === false)
        this.setState({
            isLogged: true
        });
        if(this.state.isLogged === true && this.state.username !== ""){
            console.log("loaded login + true");
            this.loadHeader();
            this.loadHome();
        }
    }
    loadHeader(){
        if(this.state.isLogged !== true){
            this.setState({
                NavBarChange: <NavbarPage
                    username={this.state.username}
                    loadHome={this.loadHome}
                    loadUploadService={this.loadUploadService}
                    loadLogin={this.loadLogin}
                    loadSignUp={this.loadSignUp}
                    loadCategoryListPage={this.loadCategoryListPage}/>
            });
        }else{
            this.setState({
                NavBarChange: <NavbarPageLog
                    username={this.state.username}
                    checkLogout ={this.checkLogout}
                    loadHome={this.loadHome}
                    loadUploadService={this.loadUploadService}
                    loadLogin={this.loadLogin}
                    loadSignUp={this.loadSignUp}
                    loadCategoryListPage={this.loadCategoryListPage}/>
            });
        }
    }

    Home = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <div className="container mb-10">
                <ServiceCard loadCoursePage={this.loadCoursePage}
                             loadTutor={this.loadTutor}
                             loadRepairs={this.loadRepairsPage}/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    UploadService = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <Uploader username={this.state.username}/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    Tutor = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Tutors"}
                         loadUploadService={this.loadUploadService}/>
            <FooterPage/>
        </Fragment>
    );
    Login = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container">
                <LoginFormPage checkLog ={this.checkLog} setUsername={this.setUsername} />
            </div>
            <FooterPage/>
        </Fragment>
    );
    SignUp = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container">
                <SignFormPage checkLog ={this.checkLog} setUsername={this.setUsername}/>
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
    Repairs = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Repairs"}/>
            <FooterPage/>
        </Fragment>
    );
    Travel = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Travel"}/>
            <FooterPage/>
        </Fragment>
    );
    Wellness = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Wellness"}/>
            <FooterPage/>
        </Fragment>
    );
    Electrician = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={"Electrician"}/>
            <FooterPage/>
        </Fragment>
    );
    CategoryListPage = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <CategoryList  loadCoursePage={this.loadCoursePage}
                               loadTutor={this.loadTutor}
                               loadRepairs={this.loadRepairsPage}/>
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
            if(this.state.isLogged === true){
                return (
                    this.UploadService()
                );
            }else{
                return (
                    <Fragment>
                        {this.state.NavBarChange}
                        <div className="container mb-10 center-block">
                            <h3 className={"text-center mt-10"}>Please login first before upload your services!</h3>
                            <Button className={"btn btn-info btn-block my-4"} onClick={this.loadLogin}>Login</Button>
                        </div>
                        <FooterPage/>
                    </Fragment>
                )
            }

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
        }else if(this.state.Repairs)
        {
            return (
                this.Repairs()
            );
        }

    }
}

