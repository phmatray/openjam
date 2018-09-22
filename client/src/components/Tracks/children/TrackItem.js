import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Cover, Title, Edit, Artists } from './style';
import ArtistNameLinks from '../../../elements/ArtistNameLinks';

const TrackItem = ({ track }) => (
  <div style={{ width: '170px', margin: '0 auto 1.5em auto' }}>
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
      <ArtistNameLinks track={track} />
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
