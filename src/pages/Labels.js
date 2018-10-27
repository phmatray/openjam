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

    return labels === null || loading ? (
      <Spinner />
    ) : labels.length > 0 ? (
      <LabelsPresenter labels={labels} />
    ) : (
      <h4>No labels found...</h4>
    );
  }
}

Labels.propTypes = {
  fetchLabels: PropTypes.func.isRequired,
  labels: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  labels: state.label.labels,
  loading: state.label.loading,
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
