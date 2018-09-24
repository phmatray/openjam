import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkTrack from '../../../elements/Links/LinkTrack';
import ArtistNameLinks from '../../../elements/ArtistNameLinks';

const TableTracks = ({ tracks }) => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.map(track => (
          <Table.Row key={track._id}>
            <Table.Cell>{track.track_number}</Table.Cell>
            <Table.Cell>
              <LinkTrack track={track} />
            </Table.Cell>
            <Table.Cell>
              <ArtistNameLinks artists={track.artists} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

TableTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      artists: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TableTracks;
