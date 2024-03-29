import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-drop-zone/dist/styles.css'
import './App.css'
import App from './App';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router basename="/webapp">
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
//unregisterServiceWorker();
