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
            loadPageName: '',
            Home: false,
            UploadService: false,
            Tutor: false,
            Login: false,
            SignUp: false,
            CoursePage: false,
            Repairs: false,
            CategoryListPage: false,
            username:"",
            provider:""
        };
        this.checkLogout =  this.checkLogout.bind(this);
        this.checkLog = this.checkLog.bind(this);
        this.loadHeader = this.loadHeader.bind(this);
        this.loadHome = this.loadHome.bind(this);
        this.loadUploadService = this.loadUploadService.bind(this);
        this.loadPage = this.loadPage.bind(this);
        this.loadLogin = this.loadLogin.bind(this);
        this.loadSignUp = this.loadSignUp.bind(this);
        this.loadCategoryListPage = this.loadCategoryListPage.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setProvider = this.setProvider.bind(this);
    }

    componentWillMount() {
        this.loadHeader();
    }
    loadHome(){
        this.setState({
            Home: true,
            loadPageName: '',
            default: false,
            UploadService: false,
            Login: false,
            SignUp: false,
            CategoryListPage: false
        });
    }
    loadUploadService(){
        this.setState({
            default: false,
            loadPageName: '',
            Home: false,
            UploadService: true,
            Login: false,
            SignUp: false,
            CategoryListPage: false
        });
    }
    loadLogin(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Login: true,
            SignUp: false,
            loadPageName: '',
            CategoryListPage: false
        });
    }
    loadSignUp(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            Login: false,
            SignUp: true,
            loadPageName: '',
            CategoryListPage: false
        });
    }
    loadPage(name){
        this.setState({
            loadPageName: name,
            default: false,
            Home: false,
            UploadService: false,
            Login: false,
            SignUp: false,
            CategoryListPage: false
        });
    }
    loadCategoryListPage(){
        this.setState({
            default: false,
            Home: false,
            UploadService: false,
            loadPageName: '',
            Login: false,
            SignUp: false,
            CategoryListPage: true
        });
    }
    setUsername(name){
        this.setState({
            username: name
        });
    }
    setProvider(name){
        this.setState({
            provider: name
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
                <ServiceCard loadPage={this.loadPage}/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    UploadService = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <Uploader username={this.state.username} isProvider={this.state.provider}/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    Login = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container">
                <LoginFormPage checkLog ={this.checkLog} setUsername={this.setUsername} setProvider={this.setProvider} />
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
    CategoryListPage = () => (
        <Fragment>
            {this.state.NavBarChange}
            <div className="container mb-10">
                <CategoryList  loadPage={this.loadPage}/>
            </div>
            <FooterPage/>
        </Fragment>
    );
    servicePage = () => (
        <Fragment>
            {this.state.NavBarChange}
            <SearchPage />
            <ServiceInfo category={this.state.loadPageName}/>
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
                if(this.state.provider === '1'){
                    return (
                        this.UploadService()
                    );
                }else {
                    return (
                        <Fragment>
                            {this.state.NavBarChange}
                            <div className="container mb-10 center-block">
                                <h3 className={"text-center mt-10"}>Please login with provider account to upload your service!</h3>
                            </div>
                            <FooterPage/>
                        </Fragment>
                    );
                }

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
        }else if(this.state.loadPageName !== '')
        {
            return (
                this.servicePage()
            );
        }else if(this.state.CategoryListPage)
        {
            return (
                this.CategoryListPage()
            );
        }

    }
}

