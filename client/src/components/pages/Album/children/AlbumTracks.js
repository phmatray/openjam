import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../../../elements/Links/LinkEntity';
import LinkArtistNames from '../../../../elements/Links/LinkArtistNames';
import { HeaderCell } from './style';

const AlbumTracks = ({ tracks }) => {
  return (
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">Title</HeaderCell>
          <HeaderCell>Artist</HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.map(track => (
          <Table.Row key={track._id}>
            <Table.Cell>{track.track_number}</Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track} as="table" strong={true} />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists} as="table" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

AlbumTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      artists: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AlbumTracks;
