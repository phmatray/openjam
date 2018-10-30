import React, { Component } from 'react';
import BlockCollection from './discover/BlockCollection';
import Body from './discover/Body';
import data from './discover/data.json';

export class discover extends Component {
  render() {
    return (
      <Body>
        <BlockCollection blockItems={data} />
      </Body>
    );
  }
}

export default discover;
