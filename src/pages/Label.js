import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchLabel, getLabel, getLoading } from '../redux/modules/label';

import LabelPresenter from './label/LabelPresenter';

class Label extends Component {
  state = {
    labelId: null,
  };

  componentDidMount() {
    this.setState({ labelId: this.props.match.params.id }, () =>
      this.props.fetchLabel(this.state.labelId),
    );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.labelId)
      this.setState({ labelId: params.id }, () => this.props.fetchLabel(this.state.labelId));
  }

  render() {
    const { label, loading } = this.props.label;

    return label === null || label === undefined || loading ? (
      <Spinner />
    ) : (
      <LabelPresenter label={label} />
    );
  }
}

Label.propTypes = {
  fetchLabel: PropTypes.func.isRequired,
  label: PropTypes.object,
  loading: PropTypes.bool,
};

Label.defaultProps = {
  label: null,
  loading: false,
};

const mapStateToProps = state => ({
  label: getLabel(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchLabel },
)(Label);
