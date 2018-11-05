import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import Cover from './track/Cover';
import Artists from './track/Artists';
import LinkArtistNames from '../LinkArtistNames';
import LinkEntity from '../LinkEntity';
import Div from '../Div';

const TrackItem = ({ track }) => {
  const startDate = moment().subtract(21, 'days');
  const trackDate = moment(track.date);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: 'calc(340px + 0.9em)',
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

export default TrackItem;
