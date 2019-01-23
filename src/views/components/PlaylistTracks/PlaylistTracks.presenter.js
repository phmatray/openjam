// @flow

import React from 'react';
import { Table } from 'semantic-ui-react';

import LinkEntity from 'views/components/LinkEntity';
import LinkArtistNames from 'views/components/LinkArtistNames';
import type { PlaylistBasic, TrackBasic } from 'lib/types';

import LinkPlay from './children/LinkPlay';
import CoverToggle from './children/CoverToggle';
import Row from './children/Row';
import HeaderCell from './styled/HeaderCell';

type Props = {
  playSelected: () => void,
  pause: () => void,
  playlist: PlaylistBasic,
  playerPlaying: boolean,
  playerCollection: { _id: string },
  playerTrack: TrackBasic,
  t: any,
};

const PlaylistTracks = ({
  playSelected,
  pause,
  playlist,
  playerPlaying,
  playerCollection,
  playerTrack,
  t,
}: Props) => {
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
        {playlist.tracks.map(t => (
          <Row key={t.track._id} active={isActive(t.track._id)}>
            <Table.Cell style={{ padding: 0 }}>
              <CoverToggle
                {...{
                  playSelected,
                  pause,
                  playlist,
                  track: t.track,
                  isActive: isActive(t.track._id),
                  playerPlaying,
                }}
              />
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: 0 }}>
              <LinkPlay
                entity={t.track}
                as="table"
                strong
                handleClick={() => playSelected(playlist, t.track)}
              />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={t.track.artists.map(a => a.artist)} as="table" />
            </Table.Cell>
            <Table.Cell>
              <LinkEntity entity={t.track.albums[0].album} as="table" />
            </Table.Cell>
          </Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default PlaylistTracks;
