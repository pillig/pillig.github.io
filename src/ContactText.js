import React, { Component } from 'react';


class ContactText extends Component {
  render() {
    return (
      <div className="contactText">
        <p>
          You can contact me at .
        </p>
      </div>
    )
  }
}

class Accounts extends Component {
  render() {
    return (
      <div className="accounts">
        Accounts here
      </div>
    )
  }
}

class ContactInfo extends Component {
  render() {
    return (
      <div>
        <ContactText></ContactText>
        <Accounts></Accounts>
      </div>
    )
  }
}

export default ContactInfo;
