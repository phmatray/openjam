import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLabels } from '../../redux/modules/label';
import { Segment, Header, Card } from 'semantic-ui-react';
import LabelItems from './presenter';

class Labels extends Component {
  componentDidMount() {
    this.props.fetchLabels();
  }

  render() {
    const { labels, loading } = this.props;

    return (
      <Segment basic>
        <Header as="h1">
          Labels
          <Header.Subheader>Pick some music by title, label, remix or label.</Header.Subheader>
        </Header>

        {labels !== null && (
          <Card.Group itemsPerRow={3}>
            <LabelItems labels={labels} loading={loading} />
          </Card.Group>
        )}
      </Segment>
    );
  }
}

Labels.propTypes = {
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
