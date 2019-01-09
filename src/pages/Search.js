import React, { Component } from 'react';

import VisibleTrackList from './tracks/VisibleTrackList';

class Search extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        Search
        <VisibleTrackList />
      </div>
    );
  }
}

export default Search;
