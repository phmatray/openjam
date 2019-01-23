// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from 'views/components/Spinner';
import { fetchLabels, selectLabels, selectIsFetching } from 'store/modules/data/labels';
import type { LabelBasic } from 'lib/types';

import Presenter from './Labels.presenter';

type Props = {
  fetchLabels: () => void,
  labels?: LabelBasic[],
  loading: boolean,
};

class Labels extends PureComponent<Props> {
  static defaultProps = {
    labels: null,
  };

  componentDidMount() {
    this.props.fetchLabels();
  }

  render() {
    const { labels, loading } = this.props;

    if (labels === null || labels === undefined || loading) {
      return <Spinner />;
    }
    if (labels.length === 0) {
      return <h4>No labels found...</h4>;
    }
    return <Presenter labels={labels} />;
  }
}

const mapStateToProps = state => ({
  labels: selectLabels(state),
  loading: selectIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
