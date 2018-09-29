import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Cover, Artists } from './style';
import { Divider } from 'semantic-ui-react';
import LinkArtistNames from '../../../elements/Links/LinkArtistNames';
import LinkEntity from '../../../elements/Links/LinkEntity';

const TrackItem = ({ track }) => (
  <div
    style={{
      display: 'flex',
      width: 'calc(340px + 0.9em)',
      height: 'calc(55px)',
      marginRight: '0.9em',
    }}
  >
    <Link to={`/track/${track._id}`}>
      <Cover src={track.coverurl.w400} />
    </Link>
    <div style={{ width: '100%' }}>
      <Divider style={{ margin: '0 0 0.6em 0' }} />
      <LinkEntity entity={track} as="table" strong />
      <Artists>
        <LinkArtistNames artists={track.artists} as="table" />
      </Artists>
    </div>
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
