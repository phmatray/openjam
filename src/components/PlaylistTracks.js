import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import LinkEntity from './LinkEntity';
import LinkArtistNames from './LinkArtistNames';
import LinkPlay from './playlist-tracks/LinkPlay';
import CoverToggle from './playlist-tracks/CoverToggle';
import Row from './playlist-tracks/Row';
import { HeaderCell } from './playlist-tracks/Atoms';
import { playSelected, pause } from '../redux/modules/player';

const PlaylistTracks = ({
  playSelected,
  pause,
  playlist,
  playerPlaying,
  playerCollection,
  playerTrack,
  t,
}) => {
  const isActive = trackId =>
    playerCollection !== null &&
    playerCollection._id === playlist._id &&
    playerTrack !== null &&
    playerTrack._id === trackId;

  return (
    <Table basic="very" unstackable>
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">{t('components.playlist-tracks.track')}</HeaderCell>
          <HeaderCell>{t('components.playlist-tracks.artist')}</HeaderCell>
          <HeaderCell>{t('components.playlist-tracks.album')}</HeaderCell>
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
                strong
                handleClick={() => playSelected(playlist, track)}
              />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists.map(a => a.artist)} as="table" />
            </Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track.albums[0].album} as="table" />
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
        artists: PropTypes.array.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,

  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  playerPlaying: PropTypes.bool.isRequired,
  playerCollection: PropTypes.object.isRequired,
  playerTrack: PropTypes.object.isRequired,
};

PlaylistTracks.defaultProps = {};

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
)(withNamespaces('common')(PlaylistTracks));
