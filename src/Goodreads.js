import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { parseString } from 'xml2js';
import { Image } from 'antd';
import 'firebase/firestore'
import './Goodreads.css'


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
    const title = this.props.data.title[0].replace(/\s/g, '%20');
    const author = this.props.data.authors[0].author[0].name[0].replace(/\s/g, '%20');;
    const book_search_url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${key}`;
    console.log(book_search_url);
    let req = new XMLHttpRequest();
    let component = this;
    req.addEventListener("load", function (event) {
      let data = JSON.parse(this.responseText);
      if (data.totalItems > 0 ) {
        let itemInfo = data.items[0].volumeInfo;
        if (itemInfo.imageLinks.thumbnail) {
          component.setState({ image_url: itemInfo.imageLinks.thumbnail});
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
      image_url: ''
    }

    get_gb_key().then( (key) => { 
      this.get_book_info(key);
    });
  }

  render() {
    return (
      <div className="book-container">
        <div className="book-image">
          <Image width={200} preview={false} src={this.state.image_url} />
        </div>
      </div>
    )
  }
}

class GoodreadsList extends Component {

  render() {
    console.log(this.props.books);
     return (
      <div className="read-book-list">
        {this.props.books.map((book, index) => (
            <Book data={book} key={index}/>
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
      parseString(this.responseText, function(err, result) {
        let filtered_books = [];
        let reviews = result.GoodreadsResponse.reviews[0].review;
        const today_date = new Date();
        for (let review of reviews) {
          let read_date = new Date(review.read_at);
          if (read_date.getFullYear() === today_date.getFullYear()) {
            filtered_books.push(review.book[0]);
          }
        }
        component.setState({books: filtered_books});
      });
    });
    req.open("GET", req_url);
    req.send();
  }

  constructor (props) {
    super(props);
    this.state = {
      key: undefined,
      books: []
    }

    get_gr_key().then( (key) => { 
      this.get_books(key);
    });
  }

  render() {
    return (
      <div className="book-list-container">
        <div className="book-list-header">Books Read This Year</div>
        <GoodreadsList books={this.state.books}></GoodreadsList>
      </div>

    )
  }
}