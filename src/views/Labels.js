// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchLabels, getLabels, getLoading } from '../reducers/data/label';
import type { LabelBasic } from '../types';

import LabelsPresenter from './labels/LabelsPresenter';

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
    return <LabelsPresenter labels={labels} />;
  }
}

const mapStateToProps = state => ({
  labels: getLabels(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
