import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from './track-item/Cover';
import BlockTrack from './track-item/BlockTrack';
import { Divider } from 'semantic-ui-react';

class TrackItem extends Component {
  render() {
    const { track } = this.props;
    return (
      <BlockTrack>
        <Cover src={track.imagesrc} />
        <div style={{ width: '100%' }}>
          <Divider style={{ margin: '0 0 0.6em 0' }} />
          <span>{track.title}</span>
          <span>{track.artist}</span>
        </div>
      </BlockTrack>
    );
  }
}

TrackItem.propTypes = {
  track: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrackItem;
