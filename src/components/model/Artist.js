import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './artist/Card';
import Content from './artist/Content';
import Title from './artist/Title';

const Artist = ({ artist }) => (
  <Link to={`/artist/${artist._id}`}>
    <Card imagesrc={artist.images && artist.images.length > 0 && artist.images[0].url}>
      <Content>
        <Title>{artist.name}</Title>
      </Content>
    </Card>
  </Link>
);

Artist.propTypes = {
  artist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagesrc: PropTypes.string,
  }).isRequired,
};

export default Artist;
