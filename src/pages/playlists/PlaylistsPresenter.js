import React from 'react';
import PropTypes from 'prop-types';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';
import Playlist from '../../components/model/Playlist';

const PlaylistsPresenter = ({ playlists }) => (
  <Body breadcrumbSegments={['Playlists']} description="Pick some music by playlist.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {playlists.map(playlist => (
        <Playlist key={playlist._id} playlist={playlist} />
      ))}
    </Flex>
  </Body>
);

PlaylistsPresenter.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PlaylistsPresenter;
