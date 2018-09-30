import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../../../elements/Links/LinkEntity';
import LinkArtistNames from '../../../../elements/Links/LinkArtistNames';
import { HeaderCell, CoverCell } from './style';

const PlaylistTracks = ({ tracks }) => {
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
        {tracks.map(track => (
          <Table.Row key={track._id}>
            <CoverCell>
              <img
                src={track.coverurl.w200}
                style={{ width: '3em', height: '3em', borderRadius: '5%' }}
                alt={track.title}
              />
            </CoverCell>
            <Table.Cell>
              <LinkEntity entity={track} as="table" strong={true} />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists} as="table" />
            </Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track.album} as="table" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

PlaylistTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      artists: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PlaylistTracks;