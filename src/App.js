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
      <div>
        <SiteHeader />
        <div className="body-section">
          <About />
          <GoodreadsComponent />
        </div>
        <div className="footer">
          <Contact className="contact" />
        </div>
      </div>
    );
  }
}

export default App;
