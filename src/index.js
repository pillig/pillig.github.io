import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SiteNavbar from './Navbar';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<SiteNavbar/>, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('info'));

serviceWorker.unregister();
