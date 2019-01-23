// @flow

import React, { Component } from 'react';

type Configuration = {
  fetchMethod: () => [{}],
};

type Props = {};

const PageHOC = ({ fetchMethod }: Configuration) => {
  class Page extends Component<Props> {
    componentDidMount() {
      fetchMethod();
    }

    render() {
      return <span>Page</span>;
    }
  }

  return Page;
};

export default PageHOC;
