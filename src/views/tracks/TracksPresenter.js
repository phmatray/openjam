import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Divider } from 'semantic-ui-react';

import Flex from '../../components/Flex';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

const TracksPresenter = ({ tracks, header, subheader, background }) => (
  <React.Fragment>
    <Hero src={background}>
      <Flex fluid row alignCenter>
        <div style={{ color: 'white', maxWidth: '400px' }}>
          <Header as="h1" inverted>
            {header}
          </Header>
          <Header as="h3" inverted>
            {subheader}
          </Header>
          <br />
        </div>
      </Flex>
    </Hero>
    <Divider style={{ marginTop: 0, marginBottom: 32 }} />

    <Container>
      <Section items={tracks} scrollable={false} showDivider={false} />
    </Container>
  </React.Fragment>
);

TracksPresenter.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  header: PropTypes.string,
  subheader: PropTypes.string,
  background: PropTypes.string,
};

TracksPresenter.defaultProps = {
  header: null,
  subheader: null,
  background: null,
};

export default TracksPresenter;
