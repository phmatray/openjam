import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Item, Image } from 'semantic-ui-react';
import { Cover, Title, Edit, Artists } from './style';

const TrackItem = ({ track, color }) => {
  const artistNames = track.artists.join(' & ');

  return (
    <div style={{ width: '170px', margin: '0 auto 1.5em auto' }}>
      <Cover src={track.coverurl.w400} />
      <br />

      <Link to={`/track/${track._id}`}>
        <Title style={{ width: '170px' }}>
          {track.title} {track.edit && <Edit>{`(${track.edit})`}</Edit>}
        </Title>
      </Link>

      <Artists>{artistNames}</Artists>
    </div>
  );

  // <Card color={color}>
  //   <Card.Content>
  //     <Card.Header>
  //       <Image src={track.coverurl.w200} />
  //       <Link to={`/track/${track._id}`}>{track.title}</Link>
  //       <br />
  //       {track.edit && (
  //         <i
  //           style={{ color: '#666', fontFamily: 'Ubuntu', fontWeight: '300', fontSize: '0.8em' }}
  //         >{`(${track.edit})`}</i>
  //       )}
  //     </Card.Header>
  //     <Card.Meta>{artistNames}</Card.Meta>
  //   </Card.Content>
  // </Card>
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    edit: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
};

TrackItem.defaultProps = {
  color: 'teal',
};

export default TrackItem;
