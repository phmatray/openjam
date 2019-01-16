import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchLabels, getLabels, getLoading } from '../reducers/data/label';

import LabelsPresenter from './labels/LabelsPresenter';

class Labels extends PureComponent {
  componentDidMount() {
    this.props.fetchLabels();
  }

  render() {
    const { labels, loading } = this.props;

    if (labels === null || loading) {
      return <Spinner />;
    }
    if (labels.length === 0) {
      return <h4>No labels found...</h4>;
    }
    return <LabelsPresenter labels={labels} />;
  }
}

Labels.propTypes = {
  fetchLabels: PropTypes.func.isRequired,
  labels: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Labels.defaultProps = {
  labels: null,
};

const mapStateToProps = state => ({
  labels: getLabels(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
