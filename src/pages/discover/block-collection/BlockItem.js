import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Title from './block-item/Title';
import Content from './block-item/Content';
import SubContent from './block-item/SubContent';
import BlockStyled from './block-item/BlockStyled';
import ModelCollection from './block-item/ModelCollection';

class BlockItem extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <BlockStyled>
        <Title>
          <h1>{title}</h1>

          <div>
            <Button>Tout afficher</Button>
          </div>
        </Title>
        <Content>
          <SubContent>
            <ModelCollection models={items} />
          </SubContent>
        </Content>
      </BlockStyled>
    );
  }
}

BlockItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default BlockItem;
