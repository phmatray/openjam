import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLabels } from '../redux/modules/label';
import Spinner from '../components/Spinner';
import LabelsPresenter from './labels/LabelsPresenter';

class Labels extends Component {
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
  labels: state.label.labels,
  loading: state.label.loading,
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
