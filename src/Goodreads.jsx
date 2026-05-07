import React, { Component } from 'react';
import { parseString } from 'xml2js';
import Spinner from './Spinner';

function higherResUrl(url) {
  if (!url) return url;
  return url.replace(/_S[XY]\d+_/, '_SX315_');
}

const USER_ID    = '94308288';
const FEED_URL   = `https://www.goodreads.com/review/list_rss/${USER_ID}?shelf=read&sort=date_read&order=d`;
const PROXY      = 'https://corsproxy.io/?url=';

class Book extends Component {
  render() {
    const { title, author, imageUrl } = this.props;
    return (
      <div className="book-container">
        {imageUrl
          ? <img className="book-image" alt={title} src={imageUrl} />
          : <div className="book-placeholder" />
        }
        <div className="book-overlay">
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
        </div>
      </div>
    );
  }
}

class GoodreadsList extends Component {
  render() {
    return (
      <div className="read-book-list inner-panel">
        {this.props.books.map((book, index) => (
          <Book key={index} title={book.title} author={book.author} imageUrl={book.imageUrl} />
        ))}
      </div>
    );
  }
}


export class GoodreadsComponent extends Component {

  fetchBooks() {
    const req = new XMLHttpRequest();
    const component = this;

    req.addEventListener("load", function () {
      if (this.status !== 200) {
        component.setState({ loading: false, error: true });
        return;
      }

      parseString(this.responseText, function(err, result) {
        if (err || !result) {
          component.setState({ loading: false, error: true });
          return;
        }

        try {
          const items = (result.rss.channel[0].item || []).slice().sort((a, b) => {
            const dateA = new Date(a.user_read_at?.[0] || 0);
            const dateB = new Date(b.user_read_at?.[0] || 0);
            return dateB - dateA;
          });
          const books = items.slice(0, 15).map(item => ({
            title:    item.title?.[0]                        || '',
            author:   item.author_name?.[0]                  || '',
            imageUrl: higherResUrl(item.book_image_url?.[0]) || '',
          })).filter(b => b.title);

          component.setState({ books, loading: false });
        } catch (e) {
          component.setState({ loading: false, error: true });
        }
      });
    });

    req.addEventListener("error", function () {
      component.setState({ loading: false, error: true });
    });

    req.open("GET", `${PROXY}${encodeURIComponent(FEED_URL)}`);
    req.send();
  }

  constructor(props) {
    super(props);
    this.state = { books: [], loading: true, error: false };
    this.fetchBooks();
  }

  render() {
    const { loading, error, books } = this.state;

    let bodyContent;
    if (loading) {
      bodyContent = (
        <div className="inner-panel panel-loading">
          <Spinner />
        </div>
      );
    } else if (error || books.length === 0) {
      bodyContent = (
        <div className="read-book-list inner-panel">
          <div className="panel-empty-state">
            {error ? 'unavailable' : 'no books logged yet'}
          </div>
        </div>
      );
    } else {
      bodyContent = <GoodreadsList books={books} />;
    }

    return (
      <div className={this.props.className}>
        <div className="book-list-header panel-header title title-bar">Books Read Recently</div>
        {bodyContent}
      </div>
    );
  }
}
