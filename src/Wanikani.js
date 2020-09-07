import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { Spin } from 'antd';

import 'firebase/firestore'
import "antd/dist/antd.css";

function get_wk_key() {
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  return db.collection("keys").doc("wanikani").get().then( function (doc) {
    if (doc.exists) { 
      return doc.data()['key'];
    }
    else {
      return "ERROR"
    }
  })
}


export class WanikaniComponent extends Component {
    
  get_kanji_total(key) {
    const req_url = "https://api.wanikani.com/v2/assignments?started=true&subject_types=kanji";

    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      if (this.status !== 200) {
        throw new Error('WaniKani API did not return correctly');
      }
      let resp = JSON.parse(this.responseText);
      let loading = true;
      if (component.state.current_level && component.state.vocab) {
        loading = false;
      }
      if (resp.total_count) {
        component.setState({
          "kanji": resp.total_count,
          "loading": loading
        });
      }
    });

    req.open("GET", req_url);
    req.setRequestHeader('Wanikani-Revision', '20170710');
    req.setRequestHeader('Authorization', `Bearer ${key}`);
    req.send();

    return key;
  }

  get_vocab_total(key) {
    const req_url = "https://api.wanikani.com/v2/assignments?started=true&subject_types=vocabulary";
    
    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      if (this.status !== 200) {
        throw new Error('WaniKani API did not return correctly');
      }
      let resp = JSON.parse(this.responseText);
      let loading = true;
      if (component.state.current_level && component.state.kanji) {
        loading = false;
      }
      if (resp.total_count) {
        component.setState({
          "vocab": resp.total_count,
          "loading": loading
        });
      }
    });
   
    req.open("GET", req_url);
    req.setRequestHeader('Wanikani-Revision', '20170710');
    req.setRequestHeader('Authorization', `Bearer ${key}`);
    req.send();

    return key;
  }

  get_user_data(key) {
    const req_url = `https://api.wanikani.com/v2/user`;
    
    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      if (this.status !== 200) {
        throw new Error('WaniKani API did not return correctly');
      }
      let resp = JSON.parse(this.responseText);
      
      let loading = true;
      if (component.state.vocab && component.state.kanji) {
        loading = false;
      }
      if (resp.data) {
        component.setState({
          "current_level": resp.data.level,
          "loading": loading
        });
      }
    });
  
    req.open("GET", req_url);
    req.setRequestHeader('Wanikani-Revision', '20170710');
    req.setRequestHeader('Authorization', `Bearer ${key}`);
    req.send();
   
    return key;
  }


  constructor (props) {
    super(props);
    this.state = {
      key: undefined,
      vocab: null,
      kanji: null,
      current_level: null,
      loading: true

    }

    get_wk_key().then( (key) => { 
      this.get_kanji_total(key);
      this.get_vocab_total(key);
      this.get_user_data(key);
    });
  }

  render() {
    
    let body_content = (
      <div className="wanikani-container inner-panel">
        <div className="wanikani-info-container">
          <div className="wanikani-info-label">
            Current Level
          </div>
          <div className="wanikani-info-value">
            {this.state.current_level}
          </div>
        </div>
        <div className="wanikani-info-container">
          <div className="wanikani-info-label">
            Kanji Learned
          </div>
          <div className="wanikani-info-value">
            {this.state.kanji}
          </div>
        </div>
        <div className="wanikani-info-container">
          <div className="wanikani-info-label">
            Vocab Learned
          </div>
          <div className="wanikani-info-value">
            {this.state.vocab}
          </div>
        </div>
      </div>
    );



    if (this.state.loading) {
      body_content = (
        <div className={this.props.className}>
          <div className="list-spinner-container">
            <Spin className="list-spinner" />
          </div>
        </div>
      );
    }

    return (
      <div className={this.props.className}>
        <div className="wanikani-header panel-header title title-bar">Wanikani Progress</div>
        {body_content}
      </div>
    )
  }
}