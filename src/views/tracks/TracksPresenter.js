import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Divider, Segment } from 'semantic-ui-react';

import Div from '../../components/Div';
import Flex from '../../components/Flex';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

import ActionsMenu from './tracks-presenter/ActionsMenu';

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

    <Div mt="1em" mb="1em">
      <ActionsMenu />
    </Div>

    <Div mb="1em">
      <Container>
        <Section items={tracks} scrollable={false} showDivider={false} />
      </Container>
    </Div>
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
