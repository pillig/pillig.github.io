import React, { Component } from 'react';
import './App.css';
import Contact from './Contact'
import About from './About'
import { GoodreadsComponent } from './Goodreads'
import * as firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyC2Rd5TUOga6pTsoi6-KTKT-Fj5UcQh9Ro',
  authDomain: 'pillig-personal-site.firebaseapp.com',
  projectId: 'pillig-personal-site'
});

class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <div className='row'>
          <About className='about column left' />
          <GoodreadsComponent className='goodreads column right' />
        </div>
        <div className='footer row'>
          <Contact className='contact' />
        </div>
      </div>
    );
  }
}

export default App;
