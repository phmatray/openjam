// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
// // import { fetchLabel } from '../actions/data/labels';
// // import { getLabel, getLoading } from '../reducers/data/labels';
import { getLabel } from '../reducers/ui/views/label.reducer';
import type { LabelBasic } from '../types';

import LabelPresenter from './label/LabelPresenter';

type Props = {
  // // fetchLabel: (labelId: string) => void,
  match: { params: { id: string } },
  label?: LabelBasic,
  loading?: boolean,
};

type State = {
  labelId: string,
};

class Label extends PureComponent<Props, State> {
  state = {
    labelId: null,
  };

  static defaultProps = {
    label: null,
    loading: false,
  };

  componentDidMount() {
    // // this.setState({ labelId: this.props.match.params.id }, () =>
    // //   this.props.fetchLabel(this.state.labelId),
    // // );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.labelId) {
      // // this.setState({ labelId: params.id }, () => this.props.fetchLabel(this.state.labelId));
    }
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

const mapStateToProps = state => ({
  label: getLabel(state),
  // // loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  // // { fetchLabel },
)(Label);
