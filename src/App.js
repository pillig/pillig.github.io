import React, { Component } from 'react';
import './App.css';
import Contact from './Contact'
import About from './About'
class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <About id='about' />
        <Contact id='contact' />
      </div>
    );
  }
}

export default App;
