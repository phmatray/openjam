// @flow

import React, { PureComponent } from 'react';

import VisibleTrackList from './search/VisibleTrackList';

class Search extends PureComponent {
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
