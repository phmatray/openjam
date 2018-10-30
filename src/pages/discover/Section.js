import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'semantic-ui-react';

import Content from './section/Content';
import SubContent from './section/SubContent';
import ModelCollection from './section/ModelCollection';
import Div from '../../components/Div';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

class Section extends Component {
  render() {
    const { title, items, to } = this.props;

    return (
      <Flex column fluid>
        <Flex row fluid alignCenter justifyBetween mb="1em">
          <H2 header={title} />
          <Button as={Link} to={to} basic color="teal">
            Show all
          </Button>
        </Flex>
        <Content>
          <SubContent>
            <ModelCollection models={items} />
          </SubContent>
        </Content>
        <Div mt="2em">
          <Divider />
        </Div>
      </Flex>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
};

export default Section;
