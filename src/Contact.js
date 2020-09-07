import React, { Component } from 'react';
import { IoLogoGithub,
         IoLogoLinkedin } from "react-icons/io";
import Mailto from 'react-protected-mailto';
import * as firebase from 'firebase/app';
import 'firebase/firestore'

function get_email () {

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  return db.collection("email").doc("gmail").get().then( function (doc) {
    if (doc.exists) { 
      return doc.data()['address']
    }
    else {
      return "ERROR"
    }
  })
}

class ContactText extends Component {
  render() {
    if (this.props.email === undefined) {
      return (
        <div className="contact-text">
        </div>
      )
    }
    else {
      return (
        <div className="contact-text">
          You can contact me at <Mailto email={this.props.email} />
        </div>
      )
    }

  }
}

class Accounts extends Component {
  render() {
    return (
      <div className="icon-container">
        <a className='icon' href='https://www.github.com/pillig'>
          <IoLogoGithub />
        </a>
        <a className='icon' href='https://www.linkedin.com/in/parker-illig'>
          <IoLogoLinkedin />
        </a>
      </div>
    )
  }
}

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: undefined
    }
    get_email().then( (d) => { this.setState({ email: d }) });
  }
  render() {
    return (
      <div className="contact-container title">
        <ContactText email={this.state.email}></ContactText>
        <Accounts></Accounts>
      </div>
    )
  }
}

export default Contact;
