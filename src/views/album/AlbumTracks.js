// @flow

import React from 'react';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../components/LinkEntity';
import LinkArtistNames from '../../components/LinkArtistNames';
import HeaderCell from './album-tracks/HeaderCell';

type Props = {
  tracks: {
    _id: string,
    track_number: number,
    track: { artists: {}[] },
  }[],
};

const AlbumTracks = ({ tracks }: Props) => {
  const compare = (a, b) => {
    if (a.track_number < b.track_number) return -1;
    if (a.track_number > b.track_number) return 1;
    return 0;
  };

  return (
    <Table basic="very" unstackable>
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">Title</HeaderCell>
          <HeaderCell>Artist</HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.sort(compare).map(item => (
          <Table.Row key={item.track._id}>
            <Table.Cell>{item.track_number}</Table.Cell>
            <Table.Cell>
              <LinkEntity entity={item.track} as="table" strong />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={item.track.artists.map(a => a.artist)} as="table" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AlbumTracks;
