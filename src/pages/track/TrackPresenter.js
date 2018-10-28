import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import Body from '../../components/Body';
import LinkEntity from '../../components/LinkEntity';
import LinkArtistNames from '../../components/LinkArtistNames';

const TrackPresenter = ({ track }) => (
  <Body breadcrumbSegments={[<Link to="/tracks">Tracks</Link>, track.title]}>
    <Header as="h2">
      <LinkArtistNames artists={track.artists} />
    </Header>
    <Header as="h3">
      <LinkEntity entity={track.album} />
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
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    coverurl: PropTypes.shape({
      w400: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrackPresenter;
