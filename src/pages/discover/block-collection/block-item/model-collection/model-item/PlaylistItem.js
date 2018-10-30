import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoverGroup from './playlist-item/CoverGroup';
import CoverPlaylist from './playlist-item/CoverPlaylist';
import BlockPlaylist from './playlist-item/BlockPlaylist';
import TitlePlaylist from './playlist-item/TitlePlaylist';

class PlaylistItem extends Component {
  render() {
    const { playlist } = this.props;
    return (
      <BlockPlaylist>
        <CoverGroup>
          {playlist.covergroup.map((item, idx) => (
            <CoverPlaylist key={idx} src={item} alt={playlist.playlistname} />
          ))}
        </CoverGroup>
        <TitlePlaylist>{playlist.playlistname}</TitlePlaylist>
        <p>{playlist.descript}</p>
      </BlockPlaylist>
    );
  }
}

PlaylistItem.propTypes = {
  playlist: PropTypes.shape({
    playlistname: PropTypes.string.isRequired,
    covergroup: PropTypes.array.isRequired,
    descript: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistItem;
