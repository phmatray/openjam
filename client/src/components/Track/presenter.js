import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import Body from '../../elements/UI/Body';
import LinkAlbum from '../../elements/Links/LinkAlbum';
import ArtistNameLinks from '../../elements/ArtistNameLinks';

const TrackPresenter = ({ track }) => (
  <Body breadcrumbSegments={[<Link to="/tracks">Tracks</Link>, track.title]}>
    <Header as="h2">
      <ArtistNameLinks artists={track.artists} />
    </Header>
    <Header as="h3">
      <LinkAlbum album={track.album} />
    </Header>
    <p>Explicit : {track.explicit ? 'true' : 'false'}</p>
    <p>Disc number : {track.disc_number}</p>
    <p>Track number : {track.track_number}</p>
    <Image src={track.coverurl.w400} alt={track.title} />
  </Body>
);

TrackPresenter.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    coverurl: PropTypes.shape({
      w400: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrackPresenter;
