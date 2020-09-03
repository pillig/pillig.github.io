import React, { Component } from 'react';
import { IoLogoTwitter,
         IoLogoGithub,
         IoLogoInstagram,
         IoLogoSteam, 
         IoLogoLinkedin } from "react-icons/io";
import { Fade } from 'reactstrap';
import Mailto from 'react-protected-mailto';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import './Contact.css'

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
        <div className="contactText">
          <p>
          </p>
        </div>
      )
    }
    else {
      return (
        <div className="contactText">
          <Fade>
            <p>
              You can contact me at <Mailto email={this.props.email} />.
            </p>
          </Fade>
        </div>
      )
    }

  }
}

class Accounts extends Component {
  render() {
    return (
      <div>
        <h1>
          <a className='icon' href='https://www.github.com/pillig'>
            <IoLogoGithub />
          </a>
          <a className='icon' href='https://www.linkedin.com/in/parker-illig'>
            <IoLogoLinkedin />
          </a>
          <a className='icon' href='https://twitter.com/typicalgatsby'>
            <IoLogoTwitter />
          </a>
          <a className='icon' href='https://www.instagram.com/pillig45/'>
            <IoLogoInstagram />
          </a>
          <a className='icon' href='https://steamcommunity.com/id/TheJayGatsby'>
            <IoLogoSteam />
          </a>
        </h1>
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
      <div>
        <ContactText email={this.state.email}></ContactText>
        <Accounts></Accounts>
      </div>
    )
  }
}

export default Contact;
