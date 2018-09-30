import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './children/ArtistItem';
import Body from '../../../elements/UI/Body';
import Flex from '../../../elements/UI/Flex';
import H2 from '../../../elements/Titles/H2';

const ArtistsPresenter = ({ artists }) => (
  <Body breadcrumbSegments={['Artists']} description="Pick some music by artist.">
    <H2 header="What's new" />
    <Flex>
      {artists.map(artist => (
        <ArtistItem key={artist._id} artist={artist} />
      ))}
    </Flex>
  </Body>
);

ArtistsPresenter.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ArtistsPresenter;
