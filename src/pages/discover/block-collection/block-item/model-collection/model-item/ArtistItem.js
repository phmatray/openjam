import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistSheet from './artist-item/ArtistSheet';
import ArtistContent from './artist-item/ArtistContent';
import TitleItem from './artist-item/TitleArtist';

class ArtistItem extends Component {
  render() {
    const { artist } = this.props;
    return (
      <ArtistSheet imagesrc={artist.imagesrc}>
        <ArtistContent>
          <TitleItem>{artist.artistname}</TitleItem>
        </ArtistContent>
      </ArtistSheet>
    );
  }
}

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    type: PropTypes.string.isRequired,
    artistname: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistItem;
