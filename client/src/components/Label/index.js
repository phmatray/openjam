import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchLabel } from '../../redux/modules/label';
import Spinner from '../common/Spinner';

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

    let trackContent;

    if (label === null || loading || Object.keys(label).length === 0) {
      trackContent = <Spinner />;
    } else {
      trackContent = (
        <React.Fragment>
          <Header as="h1">{label.name}</Header>
        </React.Fragment>
      );
    }

    return <Segment basic>{trackContent}</Segment>;
  }
}

Label.propTypes = {
  fetchLabel: PropTypes.func.isRequired,
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  label: state.label,
});

export default connect(
  mapStateToProps,
  { fetchLabel },
)(Label);
