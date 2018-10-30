import React from 'react';
import PropTypes from 'prop-types';
import BlockItem from './block-collection/BlockItem';
import ContentArtist from './block-collection/ContentArtist';

const BlockCollection = ({ blockItems }) =>
  blockItems.map(
    (b, idx) =>
      b.type === 'artist-collection' ? (
        <div key={idx}>
          <ContentArtist>
            <BlockItem {...b} />
          </ContentArtist>
        </div>
      ) : (
        <BlockItem key={idx} {...b} />
      ),
  );

BlockCollection.propTypes = {
  blockItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BlockCollection;
