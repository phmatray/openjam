// @flow

import React, { PureComponent } from 'react';

import VisibleTrackList from 'views/components/VisibleTrackList';

type Props = {};

class Search extends PureComponent<Props> {
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
