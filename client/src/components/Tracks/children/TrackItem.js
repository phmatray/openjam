import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Cover, Title, Edit, Artists } from './style';
import LinkArtistNames from '../../../elements/Links/LinkArtistNames';

const TrackItem = ({ track }) => (
  <div style={{ width: '170px', marginBottom: '1.5em', marginRight: '0.9em' }}>
    <Link to={`/track/${track._id}`}>
      <Cover src={track.coverurl.w400} />
    </Link>
    <br />
    <Link to={`/track/${track._id}`}>
      <Title style={{ width: '170px' }}>
        {track.title} {track.edit && <Edit>{`(${track.edit})`}</Edit>}
      </Title>
    </Link>

    <Artists>
      <LinkArtistNames artists={track.artists} />
    </Artists>
  </div>
);

TrackItem.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    edit: PropTypes.string,
  }).isRequired,
};

TrackItem.defaultProps = {
  color: 'teal',
};

export default TrackItem;
