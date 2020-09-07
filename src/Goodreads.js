import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { parseString } from 'xml2js';
import 'firebase/firestore'
import { Spin } from 'antd';
import "antd/dist/antd.css";

function get_gr_key() {
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  return db.collection("keys").doc("goodreads").get().then( function (doc) {
    if (doc.exists) { 
      return doc.data()['key'];
    }
    else {
      return "ERROR"
    }
  })
}

function get_gb_key() {
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  return db.collection("keys").doc("googlebooks").get().then( function (doc) {
    if (doc.exists) { 
      return doc.data()['key'];
    }
    else {
      return "ERROR"
    }
  })
}

class Book extends Component {
  
  get_book_info(key) {
    const title = this.props.title.replace(/\s/g, '%20');
    const author = this.props.author.replace(/\s/g, '%20');;
    const book_search_url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${key}`;
    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      let data = JSON.parse(this.responseText);
      if (data.totalItems > 0 ) {
        let itemInfo = data.items[0].volumeInfo;
        if (itemInfo.imageLinks.thumbnail) {
          component.setState({ 
            image_url: itemInfo.imageLinks.thumbnail.replace('http://', 'https://'),
            loading: false
          });
        }
      } 
    });
    req.open("GET", book_search_url);
    req.send();
  }
  
  
  constructor (props) {
    super(props);
    this.state = {
      key: undefined,
      loading: true,
      image_url: ''
    }

    get_gb_key().then( (key) => { 
      this.get_book_info(key);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="book-container">
          <Spin className="book-spinner" />
        </div>
      )
    }
    else {
      return (
        <div className="book-container">
          <img className="book-image" alt={this.props.title} src={this.state.image_url} />
          <div className="book-overlay">
            <div className="book-title">{this.props.title}</div>
            <div className="book-author">{this.props.author}</div>
          </div>
        </div>
      )
    }

  }
}

class GoodreadsList extends Component {

  render() {
     return (
      <div className="read-book-list inner-panel">
        {this.props.books.map((book, index) => (
            <Book title={book.title} author={book.author} key={index}/>
          ))}
      </div>
    )
  }
}


export class GoodreadsComponent extends Component {
    
  get_books(key) {
    const user_id = '94308288';
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com';
    const book_url = `https://www.goodreads.com/review/list/${user_id}.xml?key=${key}&v=2&shelf=read&sort=date_read`;
    const req_url = `${cors_anywhere}/${book_url}`;
    
    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      if (this.status !== 200) {
        throw new Error('Goodreads API did not return correctly');
      }
      parseString(this.responseText, function(err, result) {
        let filtered_books = [];

        if (result === undefined) {
          component.setState({
            books: filtered_books,
            loading: false
          });
          return;
        }
        
        let reviews = result.GoodreadsResponse.reviews[0].review;
        const today_date = new Date();
        
        for (let review of reviews) {
          let read_date = new Date(review.read_at);
          if (read_date.getFullYear() === today_date.getFullYear()) {
            let new_book = {}
            new_book.title = review.book[0].title[0];
            new_book.author = review.book[0].authors[0].author[0].name[0];
            filtered_books.push(new_book);
          }
        }
        
        component.setState({
          books: filtered_books,
          loading: false
        });
      });
    });
    req.open("GET", req_url);
    req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    req.send();
  }

  constructor (props) {
    super(props);
    this.state = {
      key: undefined,
      books: [],
      loading: true
    }

    get_gr_key().then( (key) => { 
      this.get_books(key);
    });
  }

  render() {
    
    let body_content = <GoodreadsList books={this.state.books}></GoodreadsList>

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
        <div className="book-list-header panel-header title title-bar">Books Read This Year</div>
        {body_content}
      </div>
    )
  }
}