import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cover from './track-item/Cover';
import Artists from './track-item/Artists';
import { Divider } from 'semantic-ui-react';
import LinkArtistNames from '../../../components/LinkArtistNames';
import LinkEntity from '../../../components/LinkEntity';
import Div from '../../../components/Div';
import moment from 'moment';

const TrackItem = ({ track }) => {
  const startDate = moment().subtract(21, 'days');
  const trackDate = moment(track.date);

  return (
    <div
      style={{
        display: 'flex',
        width: 'calc(340px + 0.9em)',
        height: 'calc(55px)',
        marginRight: '0.9em ',
      }}
    >
      <Div mr="0.5em">
        <Link to={`/track/${track._id}`}>
          {trackDate > startDate ? (
            <Cover
              src={track.coverurl.w400}
              label={{ corner: 'left', icon: 'time', size: 'mini', color: 'teal' }}
            />
          ) : (
            <Cover src={track.coverurl.w400} />
          )}
        </Link>
      </Div>
      <div style={{ width: '100%' }}>
        <Divider style={{ margin: '0 0 0.6em 0' }} />
        <LinkEntity entity={track} as="table" strong />
        <Artists>
          <LinkArtistNames artists={track.artists} as="table" />
        </Artists>
      </div>
    </div>
  );
};

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
