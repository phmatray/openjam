import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './children/PlaylistItem';
import Body from '../../elements/UI/Body';
import Flex from '../../elements/UI/Flex';
import H2 from '../../elements/Titles/H2';

const PlaylistsPresenter = ({ playlists }) => (
  <Body breadcrumbSegments={['Playlists']} description="Pick some music by playlist.">
    <H2 header="What's new" />
    <Flex>
      {playlists.map(playlist => (
        <PlaylistItem key={playlist._id} playlist={playlist} />
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
