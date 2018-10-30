import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './artist/Card';
import Content from './artist/Content';
import Title from './artist/Title';

class Artist extends Component {
  render() {
    const { artist } = this.props;

    return (
      <Link to={`/artist/${artist._id}`}>
        <Card imagesrc={artist.imagesrc}>
          <Content>
            <Title>{artist.name}</Title>
          </Content>
        </Card>
      </Link>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagesrc: PropTypes.string,
  }).isRequired,
};

export default Artist;
