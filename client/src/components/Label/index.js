import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLabel } from '../../redux/modules/label';
import Spinner from '../common/Spinner';
import LabelPresenter from './presenter';

class Label extends Component {
  state = {
    labelId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.labelId)
      this.setState({ labelId: params.id }, () => this.props.fetchLabel(this.state.labelId));
  }

  componentDidMount() {
    this.setState({ labelId: this.props.match.params.id }, () =>
      this.props.fetchLabel(this.state.labelId),
    );
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

const mapStateToProps = state => ({
  label: state.label,
});

export default connect(
  mapStateToProps,
  { fetchLabel },
)(Label);
