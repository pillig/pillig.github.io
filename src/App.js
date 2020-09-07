import React, { Component } from 'react';
import Contact from './Contact'
import About from './About'
import { GoodreadsComponent } from './Goodreads'
import SiteHeader from './SiteHeader';
import * as firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyC2Rd5TUOga6pTsoi6-KTKT-Fj5UcQh9Ro',
  authDomain: 'pillig-personal-site.firebaseapp.com',
  projectId: 'pillig-personal-site'
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="center-column">
          <SiteHeader />
          <div className="body-section">
            <About className="about-container body-panel"/>
            <GoodreadsComponent className="book-list-container body-panel" />
          </div>
        </div>
        <div className="footer title-bar">
          <Contact className="contact" />
        </div>
      </div>
    );
  }
}

export default App;
