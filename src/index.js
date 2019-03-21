import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import {Login} from './Login';
import {SignUp} from './SignUp';
import {CategoryListPage} from './CategoryListPage';
import {CoursePage} from './CoursePage'
import {TutorPage} from './TutorPage'
import {UploadService} from './UploadService'
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import 'react-drop-zone/dist/styles.css'
import './App.css'


ReactDOM.render(
    <Router basename="/webapp">
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/servicelist" component={CategoryListPage}/>
            <Route exact path="/servicelist/courses" component={CoursePage}/>
            <Route exact path="/servicelist/tutors" component={TutorPage}/>
            <Route exact path="/uploadservice" component={UploadService}/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
//unregisterServiceWorker();
