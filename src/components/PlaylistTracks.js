import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { playSelected, pause } from '../redux/modules/player';
import LinkEntity from './LinkEntity';
import LinkPlay from './playlist-tracks/LinkPlay';
import LinkArtistNames from './LinkArtistNames';
import CoverToggle from './playlist-tracks/CoverToggle';
import HeaderCell from './playlist-tracks/HeaderCell';
import Row from './playlist-tracks/Row';

const PlaylistTracks = ({
  playSelected,
  pause,
  playlist,
  playerPlaying,
  playerCollection,
  playerTrack,
}) => {
  const isActive = trackId =>
    playerCollection !== null &&
    playerCollection._id === playlist._id &&
    playerTrack !== null &&
    playerTrack._id === trackId;

  return (
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">Track</HeaderCell>
          <HeaderCell>Artist</HeaderCell>
          <HeaderCell>Album</HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {playlist.tracks.map(track => (
          <Row key={track._id} active={isActive(track._id)}>
            <Table.Cell style={{ padding: 0 }}>
              <CoverToggle
                {...{
                  playSelected,
                  pause,
                  playlist,
                  track,
                  isActive: isActive(track._id),
                  playerPlaying,
                }}
              />
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: 0 }}>
              <LinkPlay
                entity={track}
                as="table"
                strong={true}
                handleClick={() => playSelected(playlist, track)}
              />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists} as="table" />
            </Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track.album} as="table" />
            </Table.Cell>
          </Row>
        ))}
      </Table.Body>
    </Table>
  );
};

PlaylistTracks.propTypes = {
  playlist: PropTypes.shape({
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        track_number: PropTypes.number.isRequired,
        artists: PropTypes.array.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,

  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  playerPlaying: PropTypes.bool,
  playerCollection: PropTypes.object,
  playerTrack: PropTypes.object,
};

const mapStateToProps = ({ player }) => {
  const { playing, collection, current } = player;

  return {
    playerPlaying: playing,
    playerCollection: collection,
    playerTrack: current,
  };
};

export default connect(
  mapStateToProps,
  { playSelected, pause },
)(PlaylistTracks);
