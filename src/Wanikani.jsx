import React, { Component } from 'react';
import Spinner from './Spinner';
import { getFirestoreValue } from './firebase';


export class WanikaniComponent extends Component {

  fetchAll(key) {
    let completed = 0;
    const done = (updates) => {
      completed++;
      this.setState(updates);
      if (completed === 3) this.setState({ loading: false });
    };

    const makeRequest = (url, onSuccess) => {
      const req = new XMLHttpRequest();
      req.addEventListener("load", function () {
        if (this.status !== 200) { done({}); return; }
        try {
          onSuccess(JSON.parse(this.responseText));
        } catch (e) {
          done({});
        }
      });
      req.addEventListener("error", function () { done({}); });
      req.open("GET", url);
      req.setRequestHeader('Wanikani-Revision', '20170710');
      req.setRequestHeader('Authorization', `Bearer ${key}`);
      req.send();
    };

    makeRequest(
      'https://api.wanikani.com/v2/assignments?started=true&subject_types=kanji',
      (resp) => done({ kanji: resp.total_count ?? null })
    );
    makeRequest(
      'https://api.wanikani.com/v2/assignments?started=true&subject_types=vocabulary',
      (resp) => done({ vocab: resp.total_count ?? null })
    );
    makeRequest(
      'https://api.wanikani.com/v2/user',
      (resp) => done({ current_level: resp.data?.level ?? null })
    );
  }

  constructor (props) {
    super(props);
    this.state = { vocab: null, kanji: null, current_level: null, loading: true };
    getFirestoreValue('keys', 'wanikani', 'key')
      .then((key) => { this.fetchAll(key); })
      .catch(() => { this.setState({ loading: false }); });
  }

  render() {
    const { loading, current_level, kanji, vocab } = this.state;
    const noData = !current_level && !kanji && !vocab;

    let bodyContent;
    if (loading) {
      bodyContent = (
        <div className="inner-panel panel-loading">
          <Spinner />
        </div>
      );
    } else if (noData) {
      bodyContent = (
        <div className="wanikani-container inner-panel">
          <div className="panel-empty-state">unavailable</div>
        </div>
      );
    } else {
      bodyContent = (
        <div className="wanikani-container inner-panel">
          <div className="wanikani-info-container">
            <div className="wanikani-info-label">Current Level</div>
            <div className="wanikani-info-value">{current_level ?? '—'}</div>
          </div>
          <div className="wanikani-info-container">
            <div className="wanikani-info-label">Kanji Learned</div>
            <div className="wanikani-info-value">{kanji ?? '—'}</div>
          </div>
          <div className="wanikani-info-container">
            <div className="wanikani-info-label">Vocab Learned</div>
            <div className="wanikani-info-value">{vocab ?? '—'}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={this.props.className}>
        <div className="wanikani-header panel-header title title-bar">Wanikani Progress</div>
        {bodyContent}
      </div>
    );
  }
}
